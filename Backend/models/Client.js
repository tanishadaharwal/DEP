const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  email: String,
  name: String,
  seatStatus : Boolean,
  seatOccupied : String,
  isAdmin: Boolean,
  inLibrary : Boolean,
  
  
});

const LostandFoundSchema = new mongoose.Schema({

  
  
});

const QuerySchema = new mongoose.Schema({
 
  
  
});

const SeatsSchema = new mongoose.Schema({
  taken : Boolean,
  floor : Number,
  room : String,
  area : String,
  seatNumber : Number,
  occupantEmail : String
    
});




// Create a Mongoose model
const Client = mongoose.model("Client", clientSchema);

module.exports = {
  Client,
};
