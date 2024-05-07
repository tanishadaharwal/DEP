const { Seat } = require("../models/Seat");

const createSeat = async (req, res) => {
    try{
        await Seat.create({ seatNumber: 1, room: "LB1", status: false });
        await Seat.create({ seatNumber: 2, room: "LB1", status: false });
        await Seat.create({ seatNumber: 3, room: "LB1", status: false });

        await Seat.create({ seatNumber: 4, room: "LB1", status: false });
        await Seat.create({ seatNumber: 5, room: "LB1", status: false });
        await Seat.create({ seatNumber: 6, room: "LB1", status: false });
        await Seat.create({ seatNumber: 7, room: "LB1", status: false });
        await Seat.create({ seatNumber: 8, room: "LB1", status: false });

        await Seat.create({ seatNumber: 9, room: "LB1", status: false });

        await Seat.create({ seatNumber: 10, room: "LB1", status: false });

        await Seat.create({ seatNumber: 11, room: "LB1", status: false });

        await Seat.create({ seatNumber: 12, room: "LB1", status: false });

        await Seat.create({ seatNumber: 13, room: "LB1", status: false });
        await Seat.create({ seatNumber: 14, room: "LB1", status: false });
        await Seat.create({ seatNumber: 15, room: "LB1", status: false });
        await Seat.create({ seatNumber: 16, room: "LB1", status: false });
        await Seat.create({ seatNumber: 17, room: "LB1", status: false });

        await Seat.create({ seatNumber: 18, room: "LB1", status: false });

        await Seat.create({ seatNumber: 19, room: "LB1", status: false });
        await Seat.create({ seatNumber: 20, room: "LB1", status: false });
        await Seat.create({ seatNumber: 21, room: "LB1", status: false });

        await Seat.create({ seatNumber:22, room: "LB1", status: false });

        await Seat.create({ seatNumber: 23, room: "LB1", status: false });

        await Seat.create({ seatNumber: 24, room: "LB1", status: false });

        await Seat.create({ seatNumber: 25, room: "LB1", status: false });

        await Seat.create({ seatNumber: 26, room: "LB1", status: false });
        await Seat.create({ seatNumber: 27, room: "LB1", status: false });
        await Seat.create({ seatNumber: 28, room: "LB1", status: false });
        await Seat.create({ seatNumber: 29, room: "LB1", status: false });
        await Seat.create({ seatNumber: 30, room: "LB1", status: false });

        await Seat.create({ seatNumber: 31, room: "LB1", status: false });

        await Seat.create({ seatNumber: 32, room: "LB1", status: false });

        await Seat.create({ seatNumber: 33, room: "LB1", status: false });
        await Seat.create({ seatNumber: 34, room: "LB1", status: false });
        await Seat.create({ seatNumber: 35, room: "LB1", status: false });

        await Seat.create({ seatNumber:36, room: "LB1", status: false });

        await Seat.create({ seatNumber: 37, room: "LB1", status: false });

        await Seat.create({ seatNumber: 38, room: "LB1", status: false });

        await Seat.create({ seatNumber: 39, room: "LB1", status: false });

        await Seat.create({ seatNumber: 40, room: "LB1", status: false });
        await Seat.create({ seatNumber: 41, room: "LB1", status: false });
        await Seat.create({ seatNumber: 42, room: "LB1", status: false });
        await Seat.create({ seatNumber: 43, room: "LB1", status: false });
        await Seat.create({ seatNumber: 44, room: "LB1", status: false });

        await Seat.create({ seatNumber: 45, room: "LB1", status: false });

        await Seat.create({ seatNumber: 46, room: "LB1", status: false });
        await Seat.create({ seatNumber: 47, room: "LB1", status: false });
        await Seat.create({ seatNumber: 48, room: "LB1", status: false });

        await Seat.create({ seatNumber: 49, room: "LB1", status: false });

        await Seat.create({ seatNumber: 50, room: "LB1", status: false });
        await Seat.create({ seatNumber: 51, room: "LB1", status: false });

        await Seat.create({ seatNumber: 52, room: "LB1", status: false });
        




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

const getParticularSeat=async( req,res)=>{
  try{
    const seatNumber=req.params.seatOccupied;
    const room=req.params.roomOccupied;
    const seat=await Seat.findOne({room:room,seatNumber:seatNumber});
    if (!seat) {
      return res.status(404).json({ message: "Seat not found" });
    }
    res.status(200).json({message:"Successfully found seat",timer:seat.updatedAt});

  }catch(err){
    console.log("Error finding timer");
    res.status(500).json({message:err.message});
  }
}

module.exports = {
  getSeatsByRoom,
  createSeat,
  updateSeatStatus,
  getParticularSeat
};
