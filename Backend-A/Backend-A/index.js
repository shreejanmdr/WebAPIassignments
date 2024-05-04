// Imporing the packages (express)
const express = require('express');
const mongoose = require('mongoose');
const connectDatabase = require('./database/database');
const dotenv = require('dotenv')

// Creating an express app
const app = express();

// Express Json Config
app.use(express.json())

// dotenv Configuration
dotenv.config()

// Connecting to database
connectDatabase()

// Defining the port
const PORT = 5001; 

// Making a test endpoint
// Endpoints : POST, GET, PUT, DELETE
app.get('/test', (req,res)=>{
    res.send("Test API is Working!...")
})

// http://localhost:5000/test

// configuring Routes of User
app.use('/api/user', require('./routes/userRoutes'));

http://localhost:5000/api/user/create


// Starting the server
app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}!`)
})