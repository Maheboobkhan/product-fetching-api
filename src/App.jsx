import './App.css'
import ProductList from "./components/ProductList"
import {Routes, Route} from "react-router-dom";
import ProductDetails from "./components/ProductDetails"

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route exact path="/" element={<ProductList/>} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>      
    </div>
  )
}

export default App
