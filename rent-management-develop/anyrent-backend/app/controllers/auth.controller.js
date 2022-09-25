const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken, item: Item, category: Category } = db;
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const { response } = require("express");
const client = new OAuth2Client("217235402221-976eem466ten9mv9m4515qmr10a72vf3.apps.googleusercontent.com");

exports.signinGoogle = async (req, res) => {
    const { credential } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: "217235402221-976eem466ten9mv9m4515qmr10a72vf3.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    const { email_verified, email, given_name, family_name, picture } = payload;
    if (email_verified) {
        User.findOne({ email: email }).exec(async (err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                let token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: config.jwtExpiration,
                });

                let refreshToken = await RefreshToken.createToken(user);

                let authorities = [];

                if (user.roles.length) {
                    Role.find(
                        {
                            name: { $in: req.body.roles },
                        },
                        (err, roles) => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }

                            user.roles = roles.map((role) => role._id);
                            user.save((err) => {
                                if (err) {
                                    res.status(500).send({ message: err });
                                    return;
                                }
                            });
                        }
                    );
                } else {
                    Role.findOne({ name: "user" }, (err, role) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        user.roles = [role._id];
                        user.save((err) => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }
                        });
                    });
                }

                res.status(200).send({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    roles: authorities,
                    accessToken: token,
                    refreshToken: refreshToken,
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
                var id = uuidv4();
                const user = new User({
                    id: id,
                    username: email.split("@")[0],
                    email: email,
                    password: bcrypt.hashSync("password", 8),
                    name: given_name,
                    surname: family_name,
                    phoneNumber: "",
                    birthDate: "",
                    regDate: new Date().toLocaleDateString(),
                    avatar: picture,
                    gender: "male",
                    favourite: [],
                    items: [],
                });

                user.save((err, user) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    Role.findOne({ name: "user" }, (err, role) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        user.roles = [role._id];
                        user.save((err) => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }

                            res.status(200).send(user);
                        });
                    });
                });
            }
        });
    }
};

exports.signup = (req, res) => {
    var id = uuidv4();
    const user = new User({
        id: id,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        name: req.body.name,
        surname: req.body.surname,
        phoneNumber: req.body.phoneNumber,
        birthDate: req.body.birthDate,
        regDate: new Date().toLocaleDateString(),
        gender: req.body.gender,
        favourite: req.body.favourite,
        items: req.body.items,
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles },
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    user.roles = roles.map((role) => role._id);
                    user.save((err) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({ message: "User was registered successfully!" });
                    });
                }
            );
        } else {
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = [role._id];
                user.save((err) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
    });
};

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username,
    })
        .populate("roles", "-__v")
        .exec(async (err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                });
            }

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: config.jwtExpiration,
            });

            let refreshToken = await RefreshToken.createToken(user);

            let authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                refreshToken: refreshToken,
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
        });
};

exports.refreshToken = async (req, res) => {
    const { refreshToken: requestToken } = req.body;

    if (requestToken == null) {
        return res.status(403).json({ message: "Refresh Token is required!" });
    }

    try {
        let refreshToken = await RefreshToken.findOne({ token: requestToken });

        if (!refreshToken) {
            res.status(403).json({ message: "Refresh token is not in database!" });
            return;
        }

        if (RefreshToken.verifyExpiration(refreshToken)) {
            RefreshToken.findByIdAndRemove(refreshToken._id, { useFindAndModify: false }).exec();

            res.status(403).json({
                message: "Refresh token was expired. Please make a new signin request",
            });
            return;
        }

        let newAccessToken = jwt.sign({ id: refreshToken.user._id }, config.secret, {
            expiresIn: config.jwtExpiration,
        });

        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token,
        });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};

exports.changePassword = async (req, res) => {
    const { id, oldPassword, newPassword } = req.body;
    User.findOne({
        id: id,
    }).exec(async (err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        let passwordIsValid = bcrypt.compareSync(oldPassword, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid Password!",
            });
        } else {
            user.password = bcrypt.hashSync(newPassword, 8);
            user.save();
            return res.status(200).send({
                message: "Password changed successfully!",
            });
        }
    });
};
