const mongoose = require('mongoose');
const Expense = require('../models/expense')



// Get all expenses
const getExpenses = async (req, res) => {
    // To specify sorting order 1 and -1 are used.
    // 1 is used for ascending order while -1 is used for descending order.
    // https://www.tutorialspoint.com/mongodb/mongodb_sort_record.htm
    const expenses = await Expense.find({}).sort({createdAt: -1});

    res.status(200).json({
        success: true,
        length: expenses.length,
        data: expenses
    });
}


// Get a single expense
const getExpense = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            success: false,
            error: 'Invalid Id'
        });
        return;
    }

    const expense = await Expense.findById({_id: id});

    if(!expense){
        res.status(404).json({
            success: false,
            error: 'Not found'
        });
        return;
    }

    res.status(200).json({
        success: true,
        data: expense
    });
}


// Create a new expense
const createExpense = async (req, res) => {
    const {title, description, account, category, amount} = req.body;

    try {
        const expense = await Expense.create({
            // Spread operator
            // ...req.body
            title, description, account, category, amount
        });

        res.status(200).json({
            success: true,
            data: expense
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}


// Update a single expense
const updateExpense = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            success: false,
            error: 'Invalid Id'
        });
        return;
    }

    const expense = await Expense.findByIdAndUpdate({_id: id}, {
        // Spread operator
        ...req.body
    }, {
        // [options.returnDocument='before'] by default, it will return the document before the update was applied
        // [options.new=false] if true, return the modified document rather than the original
        // https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
        returnDocument: 'after'
        // new: true
    });

    if(!expense){
        res.status(404).json({
            success: false,
            error: 'Not found'
        });
        return;
    }

    res.status(200).json({
        success: true,
        data: expense
    });
}


// Delete a single expense
const deleteExpense = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            success: false,
            error: 'Invalid Id'
        });
        return;
    }

    const expense = await Expense.findByIdAndDelete({_id: id});

    if(!expense){
        res.status(404).json({
            success: false,
            error: 'Not found'
        });
        return;
    }

    res.status(200).json({
        success: true,
        data: expense
    });
}


module.exports = {getExpenses, getExpense, createExpense, updateExpense, deleteExpense};