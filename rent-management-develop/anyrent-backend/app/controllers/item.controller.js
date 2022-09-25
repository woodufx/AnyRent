const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken, item: Item, category: Category, order: Order } = db;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { item, user } = require("../models");
const { v4: uuidv4 } = require("uuid");

exports.getAllItems = (req, res) => {
    Item.find((err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.searchItemsByName = (req, res) => {
    var name = req.query.name;
    Item.find({ title: { $regex: new RegExp(name, "i") } }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.searchItemsByCategory = (req, res) => {
    var category = req.query.category;
    Item.find(
        {
            category: { $elemMatch: { id: category } },
        },
        (err, result) => {
            if (err) {
                return res.status(403).json({ message: "Error" });
            } else {
                return res.status(200).json(result);
            }
        }
    );
};

exports.filterItems = (req, res) => {
    const handleQuerySort = (sortString) => {
        try {
            // convert the string to look like json object
            // example "id: -1, name: 1" to "{ "id": -1, "name": 1 }"
            const toJSONString = ("{" + sortString + "}").replace(/(\w+:)|(\w+ :)/g, (matched) => {
                return '"' + matched.substring(0, matched.length - 1) + '":';
            });

            return JSON.parse(toJSONString);
        } catch (err) {
            return JSON.parse("{}"); // parse empty json if the clients input wrong query format
        }
    };
    var query = {};
    if (req.query.name) query.title = { $regex: new RegExp(req.query.name, "i") };
    if (req.query.category) query.category = { $elemMatch: { id: req.query.category } };
    if (req.query.rating) query.rating = { $in: Array.from(req.query.rating.split(","), Number) };
    if (req.query.minPrice && req.query.maxPrice) query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
    if (req.query.brand) query.brand = { $in: Array.from(req.query.rating.split(","), String) };
    if (req.query.sort) query.sort = handleQuerySort(req.query.sort);
    Item.find(query, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    }).sort(query.sort);
};

exports.addReview = (req, res) => {
    let id = req.params.id;
    Item.findOne({ id: id }, (err, item) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        }
        let review = { ...req.body, date: new Date().toLocaleDateString() };
        item.reviews.push(review);
        item.save();
        const ratingCounter = item.reviews.reduce((acc, review) => {
            return acc + review.rating;
        }, 0);
        item.rating = ratingCounter / item.reviews.length;
        res.status(200).send({ message: "Success" });
    });
};

exports.getItem = (req, res) => {
    let id = req.params.id;
    Item.findOne({ id: id }, (err, item) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        }
        item.views ? (item.views = item.views + 1) : (item.views = 1);
        item.save();
        res.status(200).send(item);
    });
};

exports.getItemsByIdArray = (req, res) => {
    let arrayId = req.body.arrayId;
    Item.find({ id: { $in: arrayId } }, (err, item) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        }
        res.status(200).send(item);
    });
};

exports.getUserItemsHistory = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({ customerId: userId }).exec();
        let result = [];
        for (const order of orders) {
            const item = await Item.findOne({ id: order.itemId }).exec();
            let historyItem = {
                orderId: order.id,
                status: order.status,
                date: order.orderTime,
                item: item,
            };
            result.push(historyItem);
        }
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
};

exports.getUserActiveOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({ $and: [{ customerId: userId }, { status: { $ne: "completed" } }, { status: { $ne: "closed" } }] }).exec();
        let result = [];
        for (const order of orders) {
            const item = await Item.findOne({ id: order.itemId }).exec();
            let historyItem = {
                orderId: order.id,
                status: order.status,
                date: order.orderTime,
                item: item,
            };
            result.push(historyItem);
        }
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
    }
};

exports.createItem = (req, res) => {
    console.log(req.body);

    let itemId = uuidv4();
    let itemCover = "";

    const item = new Item({
        id: itemId,
        title: req.body.item.title, ///
        description: req.body.item.description, ///
        category: req.body.item.category, ///
        address: req.body.item.address, ///
        rating: 0,
        price: req.body.item.price, ///
        cover: req.body.item.cover,
        views: req.body.views,
        creationDate: new Date().toLocaleDateString(),
        owner: req.body.item.owner, ///
        reviews: req.body.reviews,
    });

    item.save((err, item) => {
        if (err) {
            console.log("Error");
            res.status(500).send({ message: err });
            return;
        }

        User.findOne({ id: req.body.userId }, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Error" });
            } else {
                console.log(user);

                let items = user.items;

                items.push(item.id);

                user.items = items;

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
    });

    // try {

    // } catch (error) {
    //     console.log(error);
    // }
};
