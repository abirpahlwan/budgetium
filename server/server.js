const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const expenseRoutes = require('./routes/expenses');



// app
const app = express();


// middlewares
app.use(express.json());

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


// routes
app.use('/api/expenses', expenseRoutes);


// listen
app.listen(process.env.PORT, (error) => {
    if(error){
        console.error(`Server start error!\n ${error}`);
        return;
    }
    console.info(`Server started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}!`);
});