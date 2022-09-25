const controller = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

/**
 * @route GET /api/categories
 * @group Category - Operations about authentication
 * @returns {object} 200 - All Categories
 * @returns {Error}  default - Unexpected error
 */

router.get("/", controller.allCategories);

/**
 * @route GET /api/categories/main
 * @group Category - Operations about authentication
 * @returns {[object]} 200 - Main categories
 * @returns {Error}  default - Unexpected error
 */

router.get("/main", controller.getMainCategories);

/**
 * @route GET /api/categories/name
 * @group Category - Operations about authentication
 * @param {string} name.query.required - category name.
 * @returns {[object]} 200 - Categories list
 * @returns {Error}  default - Unexpected error
 */
router.get("/name", controller.getCategoryByName);

/**
 * @route GET /api/categories/sub
 * @group Category - Operations about authentication
 * @param {string} id.query.required - category id.
 * @returns {[object]} 200 - Categories list
 * @returns {Error}  default - Unexpected error
 */
router.get("/sub", controller.getSubCategories);

/**
 * @route GET /api/categories/main-page
 * @group Category - Operations about authentication
 * @returns {[object]} 200 - Main page category list
 * @returns {Error}  default - Unexpected error
 */
router.get("/main-page", controller.mainPageCategories);

/**
 * @route GET /api/categories/burger
 * @group Category - Operations about authentication
 * @returns {[object]} 200 - Burger menu category list
 * @returns {Error}  default - Unexpected error
 */
router.get("/burger", controller.burgerCategories);

/**
 * @route GET /api/categories/:id
 * @group Category - Operations about authentication
 * @param {string} id.params.required - category id.
 * @returns {[object]} 200 - Category
 * @returns {Error}  default - Unexpected error
 */
router.get("/:id", controller.getCategory);

module.exports = router;
