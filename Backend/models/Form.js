const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
    query : String,
    email : String,
});

const LFQuerySchema = new mongoose.Schema({
  image : {
    data: Buffer,
    contentType: String
  },
  description: String,
  location: String,
  time: String,
  email : String,
});

// Create a Mongoose model
const Query = mongoose.model("Query", QuerySchema);
const LFQuery = mongoose.model("LFQuery", LFQuerySchema);

module.exports = {
  Query,
  LFQuery
};

