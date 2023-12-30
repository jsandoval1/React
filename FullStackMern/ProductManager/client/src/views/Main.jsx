import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import { Helmet } from 'react-helmet'


const Main = () => {
    // Set up state to load all products from the database + loaded
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    // Make a call to the database always have updated data
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    // Passing prop to create a new product, since we are using the component in the return statement and
    // it receives props 
    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err => {
                // Set up error handling to display validation errors from the backend to be passed to the ProductForm.jsx as prop
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                // Iterating through the validation errors object and pushing the error messages to an array
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    // Passing prop removeFromDom to share state with Main.jsx and ProductList.jsx
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div className="main">
            {/* Helmet to set the title of the page */}
            <Helmet>
                <title> Main Page </title>
            </Helmet>

            {/* Conditional rendering to display the product information or a loading message */}
            <fieldset>
                <legend> Main.jsx View </legend>
                {/* Passing prop to create a new product,initial values are empty strings. */}
                <ProductForm
                    onSubmitProp={createProduct}
                    initialName=""
                    initialPrice=""
                    initialDescription=""
                    errors={errors}
                />
                {/* Passing prop pf all products and also removeFromDom to share state with Main.jsx and ProductList.jsx */}
                {loaded ?
                    <ProductList
                        products={products}
                        removeFromDom={removeFromDom} /> :
                    <p>Making call to database to get all products...</p>}
            </fieldset>

        </div>
    )
}

export default Main