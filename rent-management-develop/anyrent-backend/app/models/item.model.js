const mongoose = require("mongoose");

const Item = mongoose.model(
    "Item",
    new mongoose.Schema({
        id: String,
        title: String,
        description: String,
        category: [
            {
                id: String,
                name: String,
            },
        ],
        address: String,
        rating: Number,
        price: Number,
        cover: [String],
        views: Number,
        creationDate: String,
        owner: {
            id: String,
            name: String,
            surname: String,
            rating: Number,
            avatar: String,
        },
        reviews: [{ authorId: String, name: String, surname: String, text: String, date: String, rating: Number }],
    })
);
module.exports = Item;
