const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/users", userController.createUser);

module.exports = router;
