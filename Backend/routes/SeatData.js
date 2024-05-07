const express = require("express");
const {
  getSeatsByRoom,
  createSeat,
  updateSeatStatus,
  getParticularSeat
} = require("../controllers/seatController.js");

const router = express.Router();

router.get(`/getSeatsByRoom/:room`, getSeatsByRoom);
router.post("/createSeat", createSeat);
router.post("/updateSeatStatus/:room/:seatId",updateSeatStatus);
router.get(`/getParticularSeat/:roomOccupied/:seatOccupied`,getParticularSeat);

module.exports = router;
