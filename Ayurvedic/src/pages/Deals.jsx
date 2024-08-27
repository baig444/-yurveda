import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { saman } from "../constants/index";

const Deals = () => {
  return (
    <div className="w-full p-10">
      <div className="h-[20vh] w-full flex flex-col items-center text-gray-700 mb-6">
        <h1 className="text-4xl font-extrabold">Deals of the Day</h1>
        <p className="text-xs">Visit our shop to see amazing products</p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4">
        {saman.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="h-fit w-full sm:w-[45%] lg:w-[30%] p-4 flex flex-col border-2 border-green-500 rounded-md hover:bg-slate-50 transition-all"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-[60%] w-full object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white mb-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-500" />
                  ))}
              </div>
              <Link
                to="/weight"
                className="text-gray-400 text-md hover:text-gray-500 transition-all"
              >
                Weight Loss
              </Link>
              <h1 className="text-md font-bold">{product.name}</h1>
              <p className="text-gray-500 text-xs">{product.description}</p>
              <div className="flex items-center gap-2">
                <p className="line-through text-gray-500">₹{product.originalPrice}</p>
                <span>₹{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Deals;
