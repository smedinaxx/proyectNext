const mongoose = require('mongoose');
const { type } = require('os');

const productSchema= new mongoose.Schema({
name: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
description: {
    type: String
},

}
);

const Product = mongoose.model('Product', productSchema)

module.exports = Product;