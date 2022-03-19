import "./App.css";
import { useProduct } from "./context/product-context";
import Homepage from "./pages/homepage";
import { Route, Routes} from "react-router-dom";
import ProductsListing from "./pages/products";
import LoginPage from './pages/login'

function App() {
  const {productsList} = useProduct()
  console.log("This is state",productsList)
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Homepage />} />
        <Route path = "/products" element = {<ProductsListing />} />
        <Route path = "/login" element = {<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
