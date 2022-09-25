const controller = require("../controllers/order.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});

router.get("/all", controller.getAllOrders);
router.post("/create", controller.createOrder);
router.post("/delete", controller.deleteOrder);
router.post("/update", controller.updateOrderStatus);
router.get("/:id", controller.getOrderByCustomerId);

module.exports = router;
