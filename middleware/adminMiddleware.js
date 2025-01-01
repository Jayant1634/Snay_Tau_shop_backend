// backend/middleware/adminMiddleware.js
// 🛡️ Admin Middleware to Restrict Access to Admins Only
const adminMiddleware = (req, res, next) => {
    try {
        // ✅ Check if `req.user` exists and user has admin role
        if (req.user && req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'Access denied: Admins only' });
        }
    } catch (error) {
        console.error('Admin Middleware Error:', error.message);
        res.status(500).json({ message: 'Internal Server Error in Admin Middleware' });
    }
};

module.exports = adminMiddleware;
