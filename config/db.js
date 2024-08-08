const mongoose = require('mongoose');

const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
};


//Uncomment this is the error say the stringquery error


//mongoose.set('stringQuery', true);


module.exports = connectDB;