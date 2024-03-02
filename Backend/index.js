'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
const ClientData = require('./routes/ClientData');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://dep2k24:.*Zhq6!6B*TuG3.@cluster0.egkhwqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'DEP',
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.use('/client',ClientData.routes);

app.get('/', (req, res) => {
  res.send('Welcome to GDSC Portal');
});
 
const port = process.env.PORT || 3000; // Use the environment variable for the port or default to 3000
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});