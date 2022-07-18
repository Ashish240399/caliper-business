
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { ProductsPage } from './components/Products/ProductsPage';
import { ProductDetails } from './components/Details/ProductDetails';
import { Cart } from './components/Cart/Cart';
import { UserNeed } from './components/Help/UserNeed';
import { Checkout } from './components/Checkout/Checkout';
import { Register } from './components/User/Register';
import { Login } from './components/User/Login';
import { UserProfile } from './components/User/UserProfile';
function App() {
  return (
    <div>
      <Navbar/>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<ProductsPage/>}></Route>
        <Route path="/details" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/user-need" element={<UserNeed/>}></Route>
        <Route path="/check-out" element={<Checkout/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/user-profile" element={<UserProfile/>}></Route>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
