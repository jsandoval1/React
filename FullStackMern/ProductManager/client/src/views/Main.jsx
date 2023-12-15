import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    return (
        <div className="main">
            <fieldset>
                <legend> Main.jsx View </legend>
                <p> Below is the ProductForm.jsx(Component) to create a new products. </p>
                <ProductForm />
                <h6> (Continuing Main.jsx View) </h6>
                <ProductList />
                <h6> (Continuing Main.jsx View) </h6>
                <p>
                    You can see all the products in the database by going to
                    <a href="http://localhost:8000/api/products"> http://localhost:8000/api/products </a> if the server is on.
                </p>
            </fieldset>
        </div>
    )
}

export default Main