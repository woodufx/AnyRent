const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

/**
 * @route POST /signup
 * @group Auth - Operations about authentication
 * @param {string} username.body - username.
 * @param {string} email.body - email.
 * @param {string} password.body - password.
 * @param {string[]} roles.body - user's roles.
 * @returns {String} 200 - User registered success
 * @returns {Error}  default - Unexpected error
 */
router.post("/signup", [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

/**
 * @route POST /signin
 * @group Auth - Operations about authentication
 * @param {string} username.body - username.
 * @param {string} password.body - password.
 * @returns {string} 200 - User login success
 * @returns {Error}  default - Unexpected error
 */
router.post("/signin", controller.signin);

/**
 * @route POST /refreshtoken
 * @group Auth - Operations about authentication
 * @param {string} refreshToken.body - Refresh Token.
 * @returns {object} 200 - New access and refresh tokens
 * @returns {Error}  default - Unexpected error
 */
router.post("/refreshtoken", controller.refreshToken);
module.exports = router;

router.post("/google", controller.signinGoogle);
router.post("/change-password", controller.changePassword);
