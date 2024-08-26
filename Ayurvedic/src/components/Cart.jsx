/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../Context/ProductContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, activeCart, setActiveCart, removefromCart } =
    useContext(CartContext);
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full bg-white lg:w-[28vw] overflow-scroll px-10 pt-4 h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all ease-in-out duration-500 z-50`}
      >
        <button className="relative ml-auto block text-gray-600 transition hover:scale-110">
          <span className="sr-only">Close cart</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} size={24} />
        </button>
        <div className="mt-6 space-y-6">
          <ul className="space-y-4">
            {cart.length > 0 ? (
              cart.map((product) => (
                <li key={product.id} className="flex items-center gap-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-16 w-16 rounded object-contain"
                  />
                  <div>
                    <h3 className="text-sm text-gray-900">{product.name}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div className="flex items-center justify-between px-5">
                        <dd className="inline font-bold">
                          ₹ {product.originalPrice}
                        </dd>
                        <MdDelete
                          onClick={() =>
                            removefromCart({
                              id: product.id,
                              name: product.name,
                              originalPrice: product.originalPrice,
                              imageUrl: product.imageUrl,
                            })
                          }
                          size={20}
                          className="cursor-pointer text-red-500"
                        />
                      </div>
                    </dl>
                  </div>
                </li>
              ))
            ) : (
              <h1 className="text-center text-black">Your Cart is Empty</h1>
            )}
          </ul>
          <div className="space-y-4 text-center">
            <Link to="/cart">
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Cart ({cart.length})
              </button>
            </Link>
            <Link to="/checkout">
              <button
                type="button"
                className="w-full mt-5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Checkout
              </button>
            </Link>
            <a
              href="#"
              className="inline-block text-sm text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4"
            >
              Continue shopping &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
