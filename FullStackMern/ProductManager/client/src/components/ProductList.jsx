import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    // products is an array of objects from Main.jsx view
    // removeFromDom is a function from Main.jsx view
    const { removeFromDom, products } = props; 

    // Delete product from database and remove from DOM (state) using the removeFromDom prop passed down from Main.jsx view
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId) // removeFromDom is a function from Main.jsx view to remove product from DOM (state)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='PersonList'>
            <fieldset>
                <legend> ProductList.jsx Component </legend>
                <p> Below is the ProductList.jsx(Component) to display all the products. </p>
                {/* Loop through products array and display each product */}
                {products.map((product, i) =>
                    <ul key={i}>
                        <li>
                            {/* Added link to product details */}
                            Product Name: <strong> <Link to={`/products/${product._id}`}>{product.name}</Link> </strong>
                        </li>
                        <li> Product Price: <strong>${product.price}</strong> </li>
                        <li> Product Description: <strong>{product.description}</strong> </li>
                        <li>
                            {/* Added button to delete product */}
                            <button onClick={(e) => { deleteProduct(product._id) }}> Delete </button>
                        </li>
                    </ul>
                )}
            </fieldset>
        </div>
    )
}

export default ProductList;