const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  email: String,
  name: String,

  isAdmin: Boolean,
  
  
});

// Create a Mongoose model
const Client = mongoose.model("Client", clientSchema);

module.exports = {
  Client,
};
