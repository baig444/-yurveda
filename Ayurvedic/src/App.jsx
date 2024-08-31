import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Shop from "./pages/Shop";
import { CartPage } from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import { Checkout } from "./pages/Checkout";
import OrderConfirm from "./pages/OrderConfirm";
import Cart from "./components/Cart";
import Diabetes from "./pages/Diabetes";
import Enquiry from "./pages/Enquiry";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  // const scroll = new LocomotiveScroll()
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/your-unique-code.js'; // Replace with your actual Tidio script URL
    script.async = true;
    script.onload = () => console.log('Tidio script loaded successfully');
    script.onerror = () => console.error('Failed to load Tidio script');
    document.body.appendChild(script);
  }, []);
  return (
    <div className="w-full pt-10">
      {/* <div className="circle"></div> */}
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/medicines" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderConfirm />} />
        <Route path="medicines/diabetes" element={<Diabetes />} />
        <Route path="enquiry" element={<Enquiry />} />
      </Routes>
      <a
        href="https://wa.me/9311776514"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bg-green-500 rounded-full shadow-md p-3 text-white  bottom-20 text-3xl cursor-pointer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default App;
