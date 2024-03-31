const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
    query : String,
    email : String,
  
  
});

// Create a Mongoose model
const Query = mongoose.model("Query", QuerySchema);

module.exports = {
  Query,
};

