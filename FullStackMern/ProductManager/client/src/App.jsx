import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main'


function App() {

  return (
    <div className="app">
      <h1> Product Manager </h1>
      <h5> Currently looking at App.jsx containing displaying the views. </h5>
      <h6> "/" is the Main.jsx view which displays the ProductForm.jsx(Component) to create a new products. </h6>
      <h6> "*" is the 404: Not Found page. This is the default page if the route path does not match. </h6>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />

      </Routes>

    </div>
  )
}

export default App
