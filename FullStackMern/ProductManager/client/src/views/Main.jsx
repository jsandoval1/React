import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    // Set up state to load all products from the database + loaded
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // useEffect + axios to make call
    // Store the array of products returned in the "products" var
    // Pass "products" as prop to ProductList.jsx
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="main">
            <fieldset>
                <legend> Main.jsx View </legend>
                <ProductForm />
                {loaded ? <ProductList products={products} /> : <p>Making call to database to get all products...</p>}
            </fieldset>
        </div>
    )
}

export default Main