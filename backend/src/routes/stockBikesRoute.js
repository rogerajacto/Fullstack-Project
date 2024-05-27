const router =  require("express").Router();

const stockBikesController = require ("../controllers/stockBikesController");

router.get("/", stockBikesController.getStockBikes);
router.get("/model/:id", stockBikesController.getStockBikeByID);
router.get("/:model", stockBikesController.getStockBikesByModel)

module.exports = router;