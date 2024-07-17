// Purpose: API routes for the application.
const router = require('express').Router();

// Import all of the API routes from /api/index.js
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Add prefix of `/categories` to routes created in category-routes.js
router.use('/categories', categoryRoutes);

// Add prefix of `/products` to routes created in product-routes.js
router.use('/products', productRoutes);

// Add prefix of `/tags` to routes created in tag-routes.js
router.use('/tags', tagRoutes);

module.exports = router;
