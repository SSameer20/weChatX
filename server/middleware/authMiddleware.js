const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(401).json({ message: "Not Authorized, token failed" });
        }
    }

    if (!token) {
        res.status(401).json({ message: "Not Authorized, No Token" });
    }
});

module.exports = {protect};
