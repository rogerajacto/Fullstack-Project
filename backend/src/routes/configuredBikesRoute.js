const router =  require("express").Router();

const configuredBikesController = require ("../controllers/configuredBikesController");

router.get("/", configuredBikesController.getAllConfiguredBikes);
router.get("/:id", configuredBikesController.getConfiguredBikesByID);
// router.post("/", configuredBikesController.addConfiguredBike);
router.post("/", configuredBikesController.addConfiguredBike);
router.put("/:id", configuredBikesController.editConfiguredBike);
router.delete("/:id", configuredBikesController.deleteConfiguredBikeByID);



module.exports = router;