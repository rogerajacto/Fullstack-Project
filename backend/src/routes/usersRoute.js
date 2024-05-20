const router =  require("express").Router();

const userController = require ("../controllers/userController");

router.get("/", userController.getAllUsers);
router.post("/register", userController.addUser);
router.post("/login", userController.loginUser);
router.put("/changePassword", userController.changePassword);

module.exports = router;