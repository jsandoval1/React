// Model Schema for Product
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
