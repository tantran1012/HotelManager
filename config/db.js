const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected");
    }).catch((error) => {
        console.log("Error connecting to database");
    });
}

module.exports = { connect };