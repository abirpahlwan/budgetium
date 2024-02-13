const express = require('express');

const router = express.Router();

const {getExpenses, getExpense, createExpense, updateExpense, deleteExpense} = require('../controllers/expenseController')

// Routes
router.get('/', getExpenses);
router.get('/:id', getExpense);
router.post('/', createExpense);
router.patch('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;