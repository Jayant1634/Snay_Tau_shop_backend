// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {
    createOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus,
} = require('../controllers/orderController');

const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

// @route   POST /api/orders
router.post('/', auth, createOrder);

// @route   GET /api/orders/myorders
router.get('/myorders', auth, getMyOrders);


// @route   GET /api/orders
router.get('/', auth, admin, getAllOrders);

// @route   PUT /api/orders/:id
router.put('/:id', auth, admin, updateOrderStatus);

module.exports = router;
