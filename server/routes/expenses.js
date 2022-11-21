const express = require('express');

const router = express.Router();

const {getExpenses, getExpense, createExpense} = require('../controllers/expenseController')



// Routes
router.get('/', getExpenses);

router.get('/:id', getExpense);

router.post('/', createExpense);

router.delete('/:id', (req, res) => {
    res.json({message: "Delete Expense"})
});

router.patch('/:id', (req, res) => {
    res.json({message: "Update Expense"})
});

module.exports = router;