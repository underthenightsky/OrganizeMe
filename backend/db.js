const mongoose = require("mongoose");
const express = require("express");
const url ="mongodb://localhost:27017/"; 
const cors = require('cors'); 
const app = express();
const Task = require("./TaskModel");
const PORT = require('./server.js');

app.use(cors());
app.use(express.json());  // To parse the incoming requests with JSON payloads


const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URL);
    const conn = await mongoose.connect(url,
      {dbName: "TaskManger"}      
    );
    // console.log(
    //   `Connected To MongoDB Database ${conn.connection.host}`
    // );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};
app.listen(3400, () => {
  console.log("Server is running on port ${PORT}");
});
module.exports = connectDB;