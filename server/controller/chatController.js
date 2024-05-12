const asyncHandler = require('express-async-handler');
const Chat = require('../Model/chatModel')
const User = require('../Model/userModel');

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        console.log("User ID params not sent with request");
        return res.sendStatus(400);
    }

    var isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } }
        ],
    }).populate("users", "-password").populate("latestMessage");
    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name path email",
    })

    if (isChat.length > 0) {
        res.send(isChat[0]);
    }
    else {
        var charData = {
            chatNAme: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        };

        try {
            const createdChat = await Chat.create(charData);
            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password");
            res.status(200).send(fullChat)
        } catch (error) {
            res.status(404);
            throw new Error(error.message);

        }
    }



});

// .then( result => res.send(result))
const fetchChats = asyncHandler(async (req, res) => {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (result) => {
                result = await User.populate(result, {
                    path: "latestMessage.sender",
                    select: "name path email",
                });

                res.status(200).send(result);
            })
    } catch (error) {
        res.status(404);
        throw new Error(error.message)

    }

})

const createGroupChat = asyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Please fill All the Fields" });

    }

    var users = JSON.parse(req.body.users);

    if (users.length < 2) {
        return res.status(400).send("More Than 2 Users are needed to create group");
    }

    users.push(req.user);
    try {
        const groupChat
            = await Chat.create(
                {
                    chatName: req.body.name,
                    users: users,
                    isGroupChat: true,
                    groupAdmin: req.user,
                }
            )

        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

        res.status(200).json(fullGroupChat);

    } catch (error) {
        res.status(404).send(error.message)

    }
})


const renameGroup = asyncHandler(async (req, res) => {
    const { chatId, chatName } = req.body;

    const updateChat = await Chat.findByIdAndUpdate(
        chatId, {
        chatName: chatName,
    }, {
        new: true,
    }
    ).populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!updateChat) {
        res.status(404);
        throw new Error("Chat not found");

    }
    else {
        res.json(updateChat);
    }

})

const addToGroup = asyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;

    const added =await Chat.findByIdAndUpdate(chatId, {
        $push: { users: userId },

    },
        { new: true },
    ).populate("users", "-password")
    .populate("groupAdmin", "-password");


    if (!added) {
        res.status(404);
        throw new Error("Chat not found");

    }
    else {
        res.json(added);
    }

})

const removeFromGroupChat = asyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;

    const removed =await Chat.findByIdAndUpdate(chatId, {
        $pull: { users: userId },

    },
        { new: true },
    ).populate("users", "-password")
    .populate("groupAdmin", "-password");


    if (!removed) {
        res.status(404);
        throw new Error("Chat not found");

    }
    else {
        res.json(removed);
    }

})
module.exports = { removeFromGroupChat, addToGroup, renameGroup, createGroupChat, fetchChats, accessChat };