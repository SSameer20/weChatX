const express = require('express');
const router = express.Router();
const { protect } = require("../middleware/authMiddleware")
const { allUsers, registerUser, authUser } = require('../controller/userController');

router.route('/').post(registerUser).get(protect, allUsers);
router.post('/login', authUser);

module.exports = router;