const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// GET: Fetch Cart Items
router.get('/', authMiddleware, getCart);

// POST: Add Item to Cart
router.post('/', authMiddleware, addToCart);

// DELETE: Remove Item from Cart
router.delete('/:id', authMiddleware, removeFromCart);

module.exports = router;
