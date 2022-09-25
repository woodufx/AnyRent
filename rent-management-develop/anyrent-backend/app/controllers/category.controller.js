const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken, item: Item, category: Category } = db;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.allCategories = (req, res) => {
    Category.find((err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.getCategory = (req, res) => {
    let id = req.params.id;
    Category.findOne({ id: id }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json({ categoryName: result.name });
        }
    });
};

exports.getCategoryByName = (req, res) => {
    var name = req.query.name;
    Category.findOne({ name: name }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.mainPageCategories = (req, res) => {
    Category.find({ displayPlace: "mainPage" }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.getMainCategories = (req, res) => {
    Category.find({ parent: null }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.getSubCategories = (req, res) => {
    var id = req.query.id;
    Category.find({ parent: id }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.burgerCategories = async (req, res) => {
    try {
        const mainCategories = await Category.find(
            { parent: null },
            {
                id: 1,
                name: 1,
            }
        ).exec();

        let finalResult = [];

        for (const mainCategory of mainCategories) {
            const subCategories = await Category.find(
                { parent: mainCategory.id },
                {
                    id: 1,
                    name: 1,
                }
            ).exec();
            let burgerCategory = {
                id: mainCategory.id,
                name: mainCategory.name,
                subCategories: subCategories,
            };
            finalResult.push(burgerCategory);
        }
        return res.status(200).json(finalResult);
    } catch (err) {
        return res.status(403).json({ message: "Error" });
    }
};
