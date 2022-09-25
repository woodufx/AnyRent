const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken, item: Item, category: Category } = db;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { user } = require("../models");

exports.getUserInfo = (req, res) => {
    let id = req.params.id;
    User.findOne({ id: id }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.addToFavourite = (req, res) => {
    User.findOne(
        {
            id: req.body.userId,
        },
        (err, user) => {
            if (err) {
                return res.status(500).send({ message: err });
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            if (user.favourite.some((item) => item === req.body.itemId)) {
                const filter = user.favourite.filter((item) => item !== req.body.itemId);
                user.favourite = filter;
                user.save();
                return res.status(200).send({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: user.roles,
                    accessToken: user.accessToken,
                    refreshToken: user.RefreshToken,
                    name: user.name,
                    surname: user.surname,
                    phoneNumber: user.phoneNumber,
                    birthDate: user.birthDate,
                    regDate: user.regDate,
                    avatar: user.avatar,
                    gender: user.gender,
                    favourite: user.favourite,
                    items: user.items,
                });
            } else {
                user.favourite.push(req.body.itemId);
                user.save();
                return res.status(200).send({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: user.roles,
                    accessToken: user.accessToken,
                    refreshToken: user.RefreshToken,
                    name: user.name,
                    surname: user.surname,
                    phoneNumber: user.phoneNumber,
                    birthDate: user.birthDate,
                    regDate: user.regDate,
                    avatar: user.avatar,
                    gender: user.gender,
                    favourite: user.favourite,
                    items: user.items,
                });
            }
        }
    );
};

exports.getFavourite = (req, res) => {
    try {
        Item.find(
            {
                id: { $in: req.body },
            },
            (err, result) => {
                if (err) {
                    return res.status(403).json({ message: "Error" });
                } else {
                    return res.status(200).json(result);
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
};

exports.allUsers = (req, res) => {
    User.find((err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.updateUser = (req, res) => {
    console.log(req.body);
    try {
        User.findOne({ id: req.body.id }, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Error" });
            } else {
                user.name = req.body.credentials.name;
                user.surname = req.body.credentials.surname;
                user.phoneNumber = req.body.credentials.phoneNumber;
                user.birthDate = req.body.credentials.birthDate;
                user.email = req.body.credentials.email;
                user.gender = req.body.credentials.gender;
                user.save();
                return res.status(200).send({
                    id: user.id,
                    username: user.username, /////
                    email: user.email, /////
                    roles: user.roles,
                    accessToken: user.accessToken,
                    refreshToken: user.RefreshToken,
                    name: user.name,
                    surname: user.surname,
                    phoneNumber: user.phoneNumber, //////
                    birthDate: user.birthDate, ////
                    regDate: user.regDate,
                    avatar: user.avatar,
                    gender: user.gender, ////
                    favourite: user.favourite,
                    items: user.items,
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.searchUserByItemId = (req, res) => {
    try {
        User.findOne({items: {$in: [req.body.id]}}, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Error" });
            } else {
                res.status(200).json(user);
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
