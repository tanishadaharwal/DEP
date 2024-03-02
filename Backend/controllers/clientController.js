'use strict';
const { Client } = require("../models/Client");
const nodemailer = require('nodemailer');

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

  module.exports = {
    createClient,
    
 };
 