import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import OpenRoute from './components/common/OpenRoute';
import ProtectedRoute from './components/common/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error404/Error';

function App() {
  return (
    <div className="w-screen flex flex-col bg-gray-800">
      <Navbar />
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
        <Route path="/products/:productid" element={<ProtectedRoute><SingleProduct/></ProtectedRoute>} />
        {/* Cart Path */}
        <Route path="/cart" element={} />

        {/* Error */}
        <Route path={"/*" || '/products/*' || "/cart/*" } element={<ProtectedRoute><Error/></ProtectedRoute>} />
        
      </Routes>
    </div>
  );
}

export default App;
