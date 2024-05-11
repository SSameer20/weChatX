const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
                      
        });
        console.log(`Connected to MongoDB ${con.connection.host}`);
    } catch (error) {
        console.log(`Error while connecting : ${error.message}`);
        process.exit();
    }
};


module.exports = connectDB;