const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  email: String,
  name: String,
  seatStatus: {
    type: Boolean,
    default: false},
  roomOccupied: {
    type: String,
    default: "" // Default value for seatOccupied
  },
  seatOccupied:{
    type:Number,
    default:0
  },
  isAdmin: Boolean,
  inLibrary: Boolean,
  queries: [String],
});

// Create a Mongoose model
const Client = mongoose.model("Client", clientSchema);

module.exports = {
  Client,
};
