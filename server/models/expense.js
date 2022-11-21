const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    account: {
        type: String,
        default: 'Main'
    },
    category: {
        type: String,
        default: 'Others'
    },
    amount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    collection: 'expenses'
});

module.exports = mongoose.model('Expense', expenseSchema);