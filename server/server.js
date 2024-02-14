const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// file imports
const expenseRoutes = require('./routes/expense');
const userRoutes = require('./routes/user');

// app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// log requests
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// database
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> {
        console.info("MongoDB connected!");
    })
    .catch((error) => {
        console.error(`MongoDB connection error!\n ${error}`);
    });

// APIs
app.use('/api/expense', expenseRoutes);
app.use('/api/user', userRoutes);

// listen
app.listen(process.env.PORT, (error) => {
    if(error){
        console.error(`Server start error!\n ${error}`);
        return;
    }
    console.info(`Server started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}!`);
});