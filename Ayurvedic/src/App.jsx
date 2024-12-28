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
import Navbar from "./components/Navbar";
import Impact from "./components/Impact";
import ProtectingPlanet from "./components/protecting-planet";
import BusinessEthics from "./components/business-ethics";
import Purpose from "./pages/Purpose";
import Career from "./components/career-page";
import EconomicImpact from "./components/economic-impact";
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  return (
    <div className="relative w-full">
      {/* <div className="circle"></div> */}
      <Cart />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/productfocus" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderConfirm />} />
        <Route path="company/values" element={<Diabetes />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/protectingplanet" element={<ProtectingPlanet />} />
        <Route path="/ethics" element={<BusinessEthics />} />
        <Route path="company/purpose" element={<Purpose />} />
        <Route path="/career" element={<Career />} />
        <Route path="/economic-impact" element={<EconomicImpact />} />
      </Routes>
      <a
        href="https://wa.me/9311776514"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-7 bg-green-500 rounded-full shadow-md p-2 text-white  bottom-16 text-4xl cursor-pointer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default App;
