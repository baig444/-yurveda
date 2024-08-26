import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { CartProvider } from "./Context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <main className="font-[Minera]">
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
  </main>
  </CartProvider>
);
