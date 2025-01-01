const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide product name'],
        },
        description: {
            type: String,
            required: [true, 'Please provide product description'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide product price'],
        },
        stock: {
            type: Number,
            required: [true, 'Please provide product stock'],
            default: 0,
        },
        category: {
            type: String,
            required: [true, 'Please provide product category'],
        },
        image: {
            type: String, // URL to the product image
            required: [true, 'Please provide product image'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
