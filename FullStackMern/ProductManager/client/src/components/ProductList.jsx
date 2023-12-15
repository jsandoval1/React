import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductList = (props) => {
    // We use an empty array as the default value because we are expecting an array of objects
    const [products, setProducts] = useState([]); 
    const [loaded, setLoaded] = useState(false);

    // useEffect to make axios call on component load
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data); // set the res.data to the products state
                setLoaded(true); // set loaded to true because the axios call has been resolved
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='PersonList'>
            <fieldset>
                <legend> ProductList.jsx Component </legend>
                <p> Below is the ProductList.jsx(Component) to display all the products. </p>
                {loaded ? (
                    products.map((product, i) =>
                        <ul key={i}>
                            <li> Product Name: <strong>{product.name}</strong> </li>
                            <li> Product Price: $<strong>{product.price}</strong> </li>
                            <li> Product Description: <strong>{product.description}</strong> </li>
                        </ul>
                    )
                ) : (
                    // If loaded is false, aka the axios call has not been resolved, display this message
                    <p> Making axios call to get all the products from the database... </p> 
                )}
            </fieldset>
        </div>
    )
}

export default ProductList