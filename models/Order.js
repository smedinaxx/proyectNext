const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
    country:{
            type: String,
            ref: 'Country',
            required: true
        },
    address:{
            type: String,
            ref: 'Address',
            required: true
        },
    cellphone:{
            type: Number,
            ref: 'Cellphone',
            required: true
        },

    totalAmount:{
        type: Number,
        required: true
    },
    orderDate:{
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports= Order;
