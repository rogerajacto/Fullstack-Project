const router =  require("express").Router();
const accessoriesContorller = require ("../controllers/accessoriesController")

router.get("/",accessoriesContorller.getAccessories);
router.get("/:id",accessoriesContorller.getAccessoriesByID);
router.post("/", accessoriesContorller.addAccessories);
router.put("/:id", accessoriesContorller.editAccessories);
router.delete("/:id", accessoriesContorller.deletAccessories)

module.exports = router;