const mongoose = require('mongoose');



const connectDB = (url) => {
    try {
        //console.log("Connecting to database...");
        return mongoose.connect(url);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;