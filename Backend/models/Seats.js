const mongoose = require("mongoose");
const SeatsSchema = new mongoose.Schema({
    taken : Boolean,
    floor : Number,
    room : String,
    area : String,
    seatNumber : Number,
    occupantEmail : String
      
  });

  // Create a Mongoose model
const Seats = mongoose.model("Seats", SeatsSchema);

module.exports = {
  Seats,
};
