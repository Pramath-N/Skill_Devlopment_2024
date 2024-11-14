const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    numberOfCopies: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Catalog', catalogSchema);