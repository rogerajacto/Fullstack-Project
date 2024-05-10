const router =  require("express").Router();

const shoppingCartController = require("../controllers/shoppingCartController");

router.get("/", shoppingCartController.getShoppingList);
router.get("/", shoppingCartController.getShoppingItemByID);

router.post("/",shoppingCartController.addShoppingItem);

router.delete("/:id" , shoppingCartController.deleteShoppingItemByID);

module.exports = router;
