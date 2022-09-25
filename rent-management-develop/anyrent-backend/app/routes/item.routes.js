const controller = require("../controllers/item.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

/**
 * @route GET /api/items/all
 * @group Items - Operations about authentication
 * @returns {[object]} 200 - Items list
 * @returns {Error}  default - Unexpected error
 */
router.get("/all", controller.getAllItems);

/**
 * @route GET /api/items/search
 * @group Items - Operations about authentication
 * @param {string} name.query.required - item name.
 * @returns {[object]} 200 - Items list
 * @returns {Error}  default - Unexpected error
 */
router.get("/search", controller.searchItemsByName);

router.get("/filter", controller.filterItems);

/**
 * @route GET /api/items/category
 * @group Items - Operations about authentication
 * @param {string} category.query.required - item category.
 * @returns {[object]} 200 - Items list
 * @returns {Error}  default - Unexpected error
 */
router.get("/category", controller.searchItemsByCategory);

/**
 * @route GET /api/items/:id
 * @group Items - Operations about authentication
 * @param {string} id.params.required - item id.
 * @returns {[object]} 200 - Item info
 * @returns {Error}  default - Unexpected error
 */
router.get("/:id", controller.getItem);
router.post("/get-by-array", controller.getItemsByIdArray);
router.post("/user-history", controller.getUserItemsHistory);
router.post("/user-active-orders", controller.getUserActiveOrders);
/**
 * @route GET /api/items/add
 * @group Items - Operations about authentication
 * @param {string} add.query.required - item name.
 * @returns {[object]} 200 - Items list
 * @returns {Error}  default - Unexpected error
 */
router.post("/add", controller.createItem);

router.post("/add-review/:id", controller.addReview);

module.exports = router;
