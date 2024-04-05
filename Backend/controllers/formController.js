'use strict';
const multer = require('multer');
const { Query } = require("../models/Form");
const { LFQuery } = require("../models/Form");

const jwt = require('jsonwebtoken')
const JWT_SECRET = "dfgjdfi4564}3^!OK]:f56iuf{sd%*dg%$"

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

const sendQuery = async (req, res) => {
    try {
        // Extract client data from the request body
        const {
            
            query,
            emailToken,
        } = req.body;
        // Decode the JWT token to get the user's email
        const decodedToken = jwt.verify(emailToken, JWT_SECRET);
        const userEmail = decodedToken.email;
        console.log("email" , userEmail);
        console.log('Received query data:', { query, userEmail});

        // Create a new client document using the Client model
        const newQuery = new Query({
            query,
            email : userEmail,

        });
  
        console.log('New Query object:', newQuery);
  
        // Save the new client document to the MongoDB database
        await newQuery.save();
  
        console.log('Query data saved successfully');
  
        res.status(201).json({ message: "Query data stored successfully" });
    } catch (error) {
        console.error("Error storing query data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
  };

const sendLFQuery = async (req, res) => {
    try {
        // Extract client data from the request body
        const {
            description,
            location,
            time,
            emailToken,
        } = req.body;
        // Decode the JWT token to get the user's email
        //const decodedToken = jwt.verify(emailToken, JWT_SECRET);
        //const userEmail = decodedToken.email;
        //console.log("email" , userEmail);
        //console.log('Received lf query data:', { image, description, location, time, userEmail});

        // Create a new client document using the Client model
        const newLFQuery = new LFQuery({
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },
            description,
            location,
            time,
            email : emailToken//userEmail,

        });
  
        console.log('New LF Query object:', newLFQuery);
  
        // Save the new client document to the MongoDB database
        await newLFQuery.save();
  
        console.log('LF Query data saved successfully');
  
        res.status(201).json({ message: "LF Query data stored successfully" });
    } catch (error) {
        console.error("Error storing lf query data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
  };


module.exports = {
    sendQuery,
    sendLFQuery
 };
 