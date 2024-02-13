const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// file imports
const expenseRoutes = require('./routes/expense');

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

const User = require('./models/user');
app.post('/api/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json({status: 'ok', data: {user: user}})
    } catch (error) {
        res.json({status: 'error', error: error});
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if(user){
            res.json({status: 'ok', data: user});
        } else {
            res.json({status: 'error', error: 'Invalid credentials'});
        }

        res.json({status: 'ok', data: user})
    } catch (error) {
        res.json({status: 'error', error: error});
    }
});

// listen
app.listen(process.env.PORT, (error) => {
    if(error){
        console.error(`Server start error!\n ${error}`);
        return;
    }
    console.info(`Server started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}!`);
});