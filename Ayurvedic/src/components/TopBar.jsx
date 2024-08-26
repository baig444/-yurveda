import { FaHeadphonesAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "./Cart";
import { useContext} from "react";
import { CartContext } from "../Context/ProductContext";

const TopBar = () => {
  const { cart, activeCart, setActiveCart,total } = useContext(CartContext);
  return (
    <div className="h-20 w-full bg-[#042304] text-white flex items-center justify-between px-20">
      <div className="flex items-center gap-2">
        <FaHeadphonesAlt className="text-2xl text-yellow-600" />
        <div>
          <p className="text-sm font-bold">CALL US</p>
          <p className="font-bold text-sm ">+91 93117 76514</p>
        </div>
      </div>
      <div className="h-fit bg-yellow-600">
        <img
          src="/Logo copy.png"
          alt=""
          className="h-20 w-24 object-cover text-white"
        />
      </div>
      <div className="flex items-center gap-5 text-yellow-600">
        <div>
          <CiHeart size={26} />
        </div>
        <div className="flex items-center gap-3">
          <div onClick={() => setActiveCart(!activeCart)} className="relative">
            <CiShoppingCart size={26} className="cursor-pointer" />
            {cart.length > 0 && (
              <div className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full h-4 w-4 flex cursor-pointer items-center justify-center text-xs">
                {cart.length}
              </div>
            )}
          </div>
          <span className="font-bold">₹{total}</span>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default TopBar;
