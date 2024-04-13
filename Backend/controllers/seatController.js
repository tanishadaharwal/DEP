const { Seat } = require("../models/Seat");

const createSeat = async (req, res) => {
    try{
        await Seat.create({ seatNumber: 1, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 2, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 3, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 4, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 5, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 6, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 7, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 8, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 9, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 10, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 11, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 12, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 13, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 14, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 15, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 16, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 17, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 18, room: "ElecLab", status: false });

        await Seat.create({ seatNumber: 19, room: "ElecLab", status: false });
        await Seat.create({ seatNumber: 20, room: "ElecLab", status: false });
     




        res.status(200).json({message:'Successfully added seats'})
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
  
};

const getSeatsByRoom = async (req, res) => {
  try {
    const room = req.params.room;
    console.log("req",req)
    console.log("room",room)
    const seats = await Seat.find({ room: room });
    res.status(200).json({ message: "Seats fetched successfully" , seats:seats});
  } catch (err) {
    console.log("Error in getting seats!");
    res.status(500).json({ message: err.message });
  }
};

const updateSeatStatus=async(req,res)=>{
  try{
    const seatId=req.params.seatId;
    const room=req.params.room;
    console.log("here")
    console.log(seatId,room);
    const seat=await Seat.findOne({room:room,seatNumber:seatId});
    if (!seat) {
      return res.status(404).json({ message: "Seat not found" });
    }
    seat.status=!seat.status;
    await seat.save();
    const seats=await Seat.find({room:room});
    res.status(200).json({message:"Successfully updated seat",seats:seats});
  }catch(err){
    console.log("Error updating seat status");
    res.status(500).json({message:err.message});
  }
}

module.exports = {
  getSeatsByRoom,
  createSeat,
  updateSeatStatus
};
