const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
                      useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB ${con.connection.host}`);
    } catch (error) {
        console.log(`Error while connecting : ${error.message}`);
        process.exit(1);
    }
};


module.exports = connectDb;