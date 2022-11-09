const express = require('express');
const Expense = require('../models/expense')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "All Expenses"})
});

router.get('/:id', (req, res) => {
    res.json({message: "This Expense"})
});

router.post('/', async (req, res) => {
    const {title, description, account, category, amount} = req.body;

    try {
        const expense = await Expense.create({
            title, description, account, category, amount
        });

        res.status(200).json({
            success: true,
            data: expense
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
});

router.delete('/:id', (req, res) => {
    res.json({message: "Delete Expense"})
});

router.patch('/:id', (req, res) => {
    res.json({message: "Update Expense"})
});

module.exports = router;