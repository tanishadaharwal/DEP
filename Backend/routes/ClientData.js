const express = require('express');
const {createClient, sendOtp, verifyOtpMail} = require('../controllers/clientController');


const router = express.Router();

router.post('/create-client', createClient);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtpMail);

module.exports = {
    routes: router
}

// done