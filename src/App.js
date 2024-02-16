import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import OpenRoute from './components/common/OpenRoute';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <div className="w-screen flex flex-col bg-gray-800">
      <Routes >
        {/* Login Path */}
        <Route path="/" element={
            <OpenRoute> <Login /> </OpenRoute>
        }/>
        {/* Products Path */}
        <Route path="/products" element={
            <ProtectedRoute>  <Products />  </ProtectedRoute>
        } />
        {/* Single Product Path */}
        {/* <Route path="/products/:productid" element={<SingleProduct />} /> */}
        {/* Cart Path */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;