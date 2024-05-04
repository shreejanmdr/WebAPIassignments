const router = require('express').Router();
const userController = require('../controllers/userControllers')

// Creating user registration route
router.post('/create', userController.creatUser)

// controller (Export) - Routes (import) - use

// exporting the router
module.exports = router