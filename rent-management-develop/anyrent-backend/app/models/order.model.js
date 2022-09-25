const mongoose = require("mongoose");

const Order = mongoose.model(
    "Order",
    new mongoose.Schema({
        id: String,
        itemId: String,
        ownerId: String,
        customerId: String,
        cost: String,
        orderTime: [String | Number | Number],
        status: String,
    })
);

module.exports = Order;
