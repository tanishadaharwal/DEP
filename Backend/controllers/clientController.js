'use strict';
const { Client } = require("../models/Client");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')


const JWT_SECRET = "dfgjdfi4564}3^!OK]:f56iuf{sd%*dg%$"
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // Outlook SMTP server
  port: 587, // Port for secure TLS/STARTTLS
  secure: false, // Set to true if you are using port 465 (SSL)
  auth: {
    user: 'dep2k24@outlook.com', // Your Outlook email address
    pass: 'G1dep2024', // Your Outlook password
  },
});

const createClient = async (req, res) => {
  try {
      // Extract client data from the request body
      const {
          
          name,
          email,
          isAdmin,
      } = req.body;

      console.log('Received client data:', { name, email, isAdmin });

      // Create a new client document using the Client model
      const newClient = new Client({
          
          name,
          email,
          isAdmin,
      });

      console.log('New client object:', newClient);

      // Save the new client document to the MongoDB database
      await newClient.save();

      console.log('Client data saved successfully');

      res.status(201).json({ message: "Client data stored successfully" });
  } catch (error) {
      console.error("Error storing client data:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};

const generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};

const otpPairs = {};

const sendOtp = async (req, res) => {
  
  const {email} = req.body;
  console.log(email);
  try {

    // Send the email
    
    const otp = generateOtp();
    const mailOptions = {
      from: 'dep2k24@outlook.com', // Sender's email address
      to: email, // Recipient's email address
      subject: 'OTP for login to LibConnect', // Email subject
      text: `
      Hi! \nWelcome to LibConnect. \nYour OTP is: ${otp}. Please use this OTP to verify your email address. The OTP is valid for 10 minutes. \n\n Regards, \n Team LibConnect`, // Email content in plain text
    };

    await transporter.sendMail(mailOptions);
    otpPairs[email] = otp;
    
    console.log('OTP sent:');

    setInterval(()=>{
        delete otpPairs[email];
    },600000)
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error('Error sending OTP:', error);
    throw error;
  }
};

const verifyOtp = (email, userOtp) => {
  const storedOtp = otpPairs[email];
console.log("user: ", userOtp);
console.log("stored : ", storedOtp);
  if (!storedOtp) {
    throw new Error('OTP not found or expired.');
  }

  if (userOtp === storedOtp) {

    console.log('OTP verified');
    
    delete otpPairs[email]; 
    return true;
  } else {
    // Invalid OTP
    console.log('Invalid OTP');
    return false;
  }
};
const verifyOtpMail = async (req, res) => {
  try {
    const email = req.body.email;
    const otp = req.body.otp;

    const isVerified = verifyOtp(email, otp);

    if (isVerified) {
      const token = jwt.sign({email : email}, JWT_SECRET);
      res.status(200).send({status:"ok", data:token});
    } else {
      res.status(400).send('Invalid OTP');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const getUserData = async (req, res) => {
  try {
    // Get the JWT token from the URL parameter
    const { token } = req.params;
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Authorization token not provided" });
    }

    // Decode the JWT token to get the user's email
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userEmail = decodedToken.email;

    // Retrieve user data from the database using the email
    const userData = await Client.findOne({ email: userEmail });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user data
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

  module.exports = {
    createClient, sendOtp, verifyOtpMail, getUserData
    
 };
 