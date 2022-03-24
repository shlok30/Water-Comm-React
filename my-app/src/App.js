import "./App.css";
import { useProduct } from "./context/product-context";
import Homepage from "./pages/homepage";
import { Route, Routes} from "react-router-dom";
import ProductsListing from "./pages/products";
import LoginPage from './pages/login'
import Mockman from "mockman-js"
import CartPage from "./pages/cart";
import WishlistPage from "./pages/wishlist";

function App() {
  const {productsList} = useProduct()
  console.log("This is state",productsList)
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Homepage />} />
        <Route path = "/products" element = {<ProductsListing />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/mockman" element = {<Mockman />} />
        <Route path = "/cart" element = {<CartPage />} />
        <Route path = "/wishlist" element = {<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
