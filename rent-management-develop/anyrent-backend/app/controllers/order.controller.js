const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken, item: Item, category: Category, order: Order } = db;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

exports.getAllOrders = (req, res) => {
    Order.find((err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        } else {
            return res.status(200).json(result);
        }
    });
};

exports.createOrder = (req, res) => {
    var id = uuidv4();
    const order = new Order({
        id: id,
        itemId: req.body.itemId,
        ownerId: req.body.ownerId,
        customerId: req.body.customerId,
        cost: req.body.cost,
        orderTime: req.body.orderTime,
        status: "payed",
    });
    order.save((err, order) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else res.status(200).send({ message: "Successfully created a new order" });
    });
};

exports.getOrderByCustomerId = (req, res) => {
    let id = req.params.id;
    Order.find({ customerId: id }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        }
        res.status(200).send(result);
    });
};

exports.updateOrderStatus = (req, res) => {
    let userId = req.body.userId;
    let id = req.body.id;
    let status = req.body.status;
    console.log(req.body);
    Order.updateOne({ customerId: userId, id: id }, {$set: {status: status}}, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        }
        res.status(200).send(result);
    });
};

exports.deleteOrder = (req, res) => {
    let userId = req.body.userId;
    let id = req.body.id;
    Order.deleteOne({ customerId: userId, id: id }, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Error" });
        }
        res.status(200).send(result);
        console.log(result);
    });
};
