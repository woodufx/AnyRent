const mongoose = require("mongoose");

const Category = mongoose.model(
    "Category",
    new mongoose.Schema({
        id: String,
        title: String,
        name: String,
        parent: String | null,
        description: String,
        imageURL: String,
        mainColor: String,
        displayPlace: ["mainPage", "burger"],
        allowedForRoles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
    })
);

module.exports = Category;
