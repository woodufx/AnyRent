const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

/* POST users favourite items. */
/**
 * This function comment is parsed by doctrine
 * @route POST /favourite
 * @group User - Operations about user
 * @returns {object} 200 - An array of user favourites items
 * @returns {Error}  default - Unexpected error
 */
router.post("/favourite", controller.getFavourite);

/* POST users update favourite items. */
/**
 * This function comment is parsed by doctrine
 * @route POST /updateFavourite
 * @group User - Operations about user
 * @returns {object} 200 - Updated user info
 * @returns {Error}  default - Unexpected error
 */
router.post("/updateFavourite", controller.addToFavourite);

/* POST update user info. */
/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group User - Operations about user
 * @returns {object} 200 - User info
 * @returns {Error}  default - Unexpected error
 */
router.post("/updateUser", controller.updateUser);

/* POST update user info. */
/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group User - Operations about user
 * @returns {object} 200 - User info
 * @returns {Error}  default - Unexpected error
 */

router.post("/searchUserByItemId", controller.searchUserByItemId);

/* GET user info. */
/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group User - Operations about user
 * @returns {object} 200 - User info
 * @returns {Error}  default - Unexpected error
 */

router.get("/:id", [authJwt.verifyToken], controller.getUserInfo);

router.get("/", controller.allUsers);
router.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
router.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);
router.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

module.exports = router;
