const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

// Crear un nuevo producto
router.post('/products', async (req, res) => {
    const { name, price, description } = req.body;
    try {
      const newProduct = new Product({ name, price, description });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Obtener todos los productos
router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Crear una nueva orden
router.post('/orders', async (req, res) => {
  const { userId, products, country, address, cellphone } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    let totalAmount = 0;
    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ error: `Producto con ID ${item.productId} no encontrado` });
      }
      totalAmount += product.price * item.quantity;
    }

    const newOrder = new Order({
      user: userId,
      products: products.map(item => ({
        product: item.productId,
        quantity: item.quantity
      })),
      country,
      address,
      cellphone,
      totalAmount
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todas las órdenes
router.get('/orders', async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('products.product');
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
