const router =  require("express").Router();
const accessoriesContorller = require ("../controllers/accessoriesController")

router.get("/",accessoriesContorller.getAccessories);
router.get("/:id",accessoriesContorller.getAccessoriesByID);

module.exports = router;