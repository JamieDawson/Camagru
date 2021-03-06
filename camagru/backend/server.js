const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //dotenv loads variablers from .env file.

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; //variable from .env file

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//
/*
Run server:
run "nodemon server" in backend folder

*/
