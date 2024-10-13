const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: Date
    }
})

module.exports = purchaseSchema;