import {BrowserRouter , Route , Routes} from "react-router-dom" ;
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./Components/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./Components/ProductDetails";
import Category from "./Components/Category";
import {useSelector} from 'react-redux' ;
import { useEffect } from "react";
import TargetedClients from "./Components/TargetedClients";
function App() {
  const theme = useSelector((state) => state.theme.themeState);

    useEffect(() => {
        document.body.className = !theme && 'bg-gray-800 text-white' 
    }, [theme]);

  const basename = process.env.PUBLIC_URL ;
  return (
    <BrowserRouter  basename={basename}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/confirmation" element={<Confirmation/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/shop/detail/:id" element={<ProductDetails/>}></Route>
        <Route path="/shop/:targetedClients" element={<TargetedClients/>}></Route>
        <Route path="/shop/category/:categoryQuery" element={<Category/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
