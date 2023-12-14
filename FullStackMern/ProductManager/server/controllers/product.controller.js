// Controller for product related operations

// Importing the Product model
const Product = require('../models/product.model');


// Create a new product
module.exports.createProduct = (request, response) => {
    const { name, price, description } = request.body;
    Product.create({
        name,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// Get all products
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}


