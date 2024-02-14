import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-900 flex flex-col font-inter">
      <Routes >
        {/* Login Path */}
        <Route path="/" element={<Login />} />
        {/* Products Path */}
        <Route path="/products" element={<Products />} />
        {/* Single Product Path */}
        {/* <Route path="/products/:productid" element={<SingleProduct />} /> */}
        {/* Cart Path */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
