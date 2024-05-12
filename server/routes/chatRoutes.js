const express = require('express');
const router = express.Router();
const { protect } = require("../middleware/authMiddleware")
const {removeFromGroupChat, renameGroup, addToGroup,  createGroupChat, fetchChats, accessChat} = require('../controller/chatController')

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').put(protect, renameGroup);
router.route('/groupadd').put(protect, addToGroup);
router.route('/groupremove').put(protect, removeFromGroupChat);


module.exports=router;