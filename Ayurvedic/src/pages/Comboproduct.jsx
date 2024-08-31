// import { Link } from "react-router-dom";
import { useContext } from "react";
import { saman } from "../constants/index";
import { CartContext } from "../Context/ProductContext.jsx";

const Comboproduct = () => {
  const { addToCart, activeCart, setActiveCart } = useContext(CartContext);
  return (
    <div className="min-h-screen w-full p-10">
      <div className=" h-[20vh] w-full flex flex-col items-center text-gray-700">
        <h1 className="text-4xl font-extrabold">Featured Products</h1>
        <p className="text-xs">Visit our shop to see amazing products</p>
      </div>
      <div className="h-fit flex justify-evenly flex-wrap w-full">
        {saman.map((product) => (
          <div
            key={product.id}
            className="bg-white h-[80%] shadow-lg border-2 hover:shadow-gray-400 transition-all rounded-lg p-4 m-4 w-72 flex flex-col"
          >
            <img
              src={product.imageUrl}
              alt=""
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-2 flex flex-col items-center gap-1">
              <h2 className="text-xs font-bold">Weigh Loss</h2>
              <p className="text-sm font-bold">{product.name}</p>
              <div className="flex items-center gap-2 text-center">
                <p className="line-through text-xs text-gray-500">
                  ₹{product.price}
                </p>
                <span>₹{product.originalPrice}</span>
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(product);
                setActiveCart(!activeCart);
              }}
              className="bg-black hover:bg-gray-800 transition-all text-white font-bold py-2 px-4 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comboproduct;
