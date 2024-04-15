import axios from 'axios';
import { IP_ADDRESS } from "@env";

export const getSeatsByRoom = async (roomName) => {
  try {
    const response = await axios.get(`http://${IP_ADDRESS}:3000/seat/getSeatsByRoom/${roomName}`);
    let sortedSeats=[];
          sortedSeats = response.data.seats.sort((a, b) => {
            return a.seatNumber - b.seatNumber;
     });
    return sortedSeats;
  } catch (error) {
    console.error('Error fetching seat data:', error.message);
    throw error;
  }
};

export const updateSeatStatus = async (roomName, seatNumber) => {
    try {
      const response = await axios.post(
        `http://${IP_ADDRESS}:3000/seat/updateSeatStatus/${roomName}/${seatNumber}`
      );
      return response.data.seats;
    } catch (error) {
      console.error('Error updating seat status:', error.message);
      throw error;
    }
  };


