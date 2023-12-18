import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Main from './views/Main'
import ProductDetail from './views/ProductDetail'
import EditProduct from './views/EditProduct'


function App() {

  return (
    <div className="app">
      <h1> Product Manager </h1>
      <h5> Currently looking at App.jsx containing displaying the views. The views will change depending on the url. </h5>

      {/* Added links to the different views */}
      <h6> Go to <Link to="/"> http://localhost:5173/ </Link> to view the ProductForm.jsx(Component) to create a new product. </h6>
      <h6> Go to <Link to="/products/657a9497b75580bc6f1d22aa"> http://localhost:5173/products/657a9497b75580bc6f1d22aa </Link> to view a single product. </h6>
      <h6> Go to <Link to="/products/657a9497b75580bc6f1d22aa/edit"> http://localhost:5173/products/657a9497b75580bc6f1d22aa/edit </Link> to edit a single product. </h6>
      <h6> Go to <Link to="/random"> http://localhost:5173/random </Link> to view the 404: Not Found page. </h6>

      {/* Added routes to the different views */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/edit" element={<EditProduct />} /> {/* Not passing in any props */}
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>

      {/* Added link to view all products in the database as Raw JSON */}
      <p>
        You can visit
        <Link to="http://localhost:8000/api/products"> localhost:8000/api/products </Link>
        to view all the products in the database as Raw JSON if you have the server running.
      </p>
    </div>
  )
}

export default App
