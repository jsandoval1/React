import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const Main = () => {
    // Set up state to load all products from the database + loaded
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Make a call to the database always have updated data
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    // Passing prop to create a new product
    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err => console.error(err));
    }

    // Passing prop removeFromDom to share state with Main.jsx and ProductList.jsx
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div className="main">
            <fieldset>
                <legend> Main.jsx View </legend>
                <ProductForm onSubmitProp={createProduct} initialName="" initialPrice="" initialDescription="" />
                {loaded ? <ProductList products={products} removeFromDom={removeFromDom} />
                    : <p>Making call to database to get all products...</p>}
            </fieldset>
        </div>
    )
}

export default Main