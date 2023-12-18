// Controller for product related operations

// Importing the Product model
const Product = require('../models/product.model');


// Create a new product
module.exports.createProduct = (request, response) => {
    const { name, price, description } = request.body; // Destructuring the request.body object, must be sent as raw JSON, not 
    Product.create({
        name,
        price,
        description
    })
        .then(product => {
            console.log("\n Product created: ", product);
            response.json(product);
        })
        .catch(err => {
            console.log("\n Error creating product");
            response.json(err);
        });
}

// Get all products
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

// Get a single product
module.exports.getSingleProduct = (request, response) => {
    Product.findOne({ _id: request.params.id }) // request.params.id is the id passed in the URL
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

// Update a single product
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        // request.params.id is the id passed in the URL
        // request.body is the data to be updated ( sent as raw JSON in the request body )
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}


