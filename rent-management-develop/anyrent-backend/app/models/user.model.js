const mongoose = require("mongoose");
const { stringify } = require("uuid");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        id: String,
        username: String,
        email: String,
        password: String,
        name: String,
        surname: String,
        phoneNumber: String,
        birthDate: String,
        regDate: String,
        avatar: String,
        gender: String,
        favourite: [String],
        items: [String],
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
    })
);

module.exports = User;
