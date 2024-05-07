const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    seatNumber: Number,
    room: String,
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

const Seat = mongoose.model("Seat", seatSchema);

module.exports = {
  Seat,
};
