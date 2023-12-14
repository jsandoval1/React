// API routes for CRUD operations for products

const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
}