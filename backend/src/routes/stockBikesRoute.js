const router =  require("express").Router();

const stockBikesController = require ("../controllers/stockBikesController");

router.get("/", stockBikesController.getStockBikes);
router.get("/:id", stockBikesController.getStockBikeByID);

module.exports = router;