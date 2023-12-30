// Controller for product related operations

// Importing the Product model
const Product = require('../models/product.model');


// Create a new product
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => {
            console.log("\n Product created: ", product);
            response.json(product);
        })
        .catch(err => {
            console.log("\n Error creating product");
            response.status(400).json(err);
            // Send a 400 status code to the client if an error occurred 
            // and include the error message in the response
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
        .then(product => {
            console.log("\n Single product: ", product);
            response.json(product);
        })
        .catch(err => response.json(err))
}

// Update a single product
// request.params.id is the id passed in the URL
// request.body is the data to be updated ( sent as raw JSON in the request body )
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedProduct => {
            console.log('Updated product:', updatedProduct);
            response.json(updatedProduct);
        })
        .catch(err => {
            console.error('Error updating product:', err);
            response.status(400).json(err);
        });
}

// Delete a single product
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => {
            console.log("\n Product deleted: ", deleteConfirmation); // deleteConfirmation is a JSON object with the deleted product's information
            response.json(deleteConfirmation);
        })
        .catch(err => response.json(err))
}


