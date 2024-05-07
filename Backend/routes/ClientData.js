const express = require('express');
const {createClient, sendOtp, verifyOtpMail, getUserData,setUserSeatStatus} = require('../controllers/clientController');


const router = express.Router();

router.post('/create-client', createClient);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtpMail);
router.get('/get-user-data/:token', getUserData);
router.post('/setUserSeatStatus/:token/:room/:seatNumber', setUserSeatStatus);


module.exports = {
    routes: router
}

// done
