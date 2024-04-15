const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
    query : String,
    email : String,
  
  
});

const LostFoundSchema = new mongoose.Schema({
    image : String,
    location : String,
    description : String,
    date : { type: Date, default: Date.now },
});

// Create a Mongoose model
const Query = mongoose.model("Query", QuerySchema);

module.exports = {
  Query,
};

