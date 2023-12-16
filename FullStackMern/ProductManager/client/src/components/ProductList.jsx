import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {products} = props

    return (
        <div className='PersonList'>
            <fieldset>
                <legend> ProductList.jsx Component </legend>
                <p> Below is the ProductList.jsx(Component) to display all the products. </p>
                {products.map((product, i) =>
                    <ul key={i}>
                        <li>
                            {/* Added link to product details */}
                            Product Name: <strong> <Link to={`/products/${product._id}`}>{product.name}</Link> </strong>
                        </li> 
                        <li> Product Price: <strong>${product.price}</strong> </li>
                        <li> Product Description: <strong>{product.description}</strong> </li>
                    </ul>
                )}
            </fieldset>
        </div>
    )
}

export default ProductList;