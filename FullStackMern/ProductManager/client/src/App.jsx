import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Main from './views/Main'
import ProductDetail from './views/ProductDetail'


function App() {

  return (
    <div className="app">
      <h1> Product Manager </h1>
      <h5> Currently looking at App.jsx containing displaying the views. </h5>
      <p>
        You can visit
        <Link to="http://localhost:8000/api/products"> localhost:8000/api/products </Link>
        to view all the products in the database if you have the server running.
      </p>
      <h6> "/" is the Main.jsx view which displays the ProductForm.jsx(Component) to create a new products. </h6>
      <h6> "/products/:id" is the ProductDetail.jsx view which displays a single product based on the id passed in the url. </h6>
      <h6> "*" is the 404: Not Found page. This is the default page if the route path does not match. </h6>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />

      </Routes>

    </div>
  )
}

export default App
