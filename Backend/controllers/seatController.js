const { Seat } = require("../models/Seat");

const createSeat = async (req, res) => {
    try{
        await Seat.create({ seatNumber: 1, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 2, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 3, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 4, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 5, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 6, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 7, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 8, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 9, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 10, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 11, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 12, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 13, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 14, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 15, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 16, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 17, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 18, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 19, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 20, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 21, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber:22, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 23, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 24, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 25, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 26, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 27, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 28, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 29, room: "CR - FirstFloor", status: false });
        await Seat.create({ seatNumber: 30, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 31, room: "CR - FirstFloor", status: false });

        await Seat.create({ seatNumber: 32, room: "CR - FirstFloor", status: false });

         await Seat.create({ seatNumber: 33, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 34, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 35, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber:36, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 37, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 38, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 39, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 40, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 41, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 42, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 43, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 44, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 45, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 46, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 47, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 48, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 49, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 50, room: "CR - FirstFloor", status: false });
        // await Seat.create({ seatNumber: 51, room: "CR - FirstFloor", status: false });

        // await Seat.create({ seatNumber: 52, room: "CR - FirstFloor", status: false });
        




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
