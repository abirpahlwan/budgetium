const mongoose = require('mongoose');

const expense = new mongoose.Schema({
    title:       {type: String, trim: true, required: true},
    description: {type: String, trim: true},
    account:     {type: String, default: 'Main'},
    category:    {type: String, default: 'Others'},
    amount:      {type: Number, required: true, default: 0}
}, {
    timestamps: true,
    collection: 'expenses'
});

module.exports = mongoose.model('Expense', expense);