import { saman } from '../constants/index';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';


export default function Shop() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mt-14 mb-10">Product List</h1>
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saman.map(product => (
              <Link key={product.id}  to={`/product/${product.id}`}>
              <div className="border rounded-lg p-4 shadow-sm flex flex-col">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <p className="text-sm mb-2 flex-grow">{product.description}</p>
                <div className="flex items-center mb-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <IoIosStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg">${product.originalPrice}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.price}</span>
                  </div>
                  <span className="text-green-600 font-semibold">
                    {Math.round((1 - product.originalPrice / product.price) * 100)}% OFF
                  </span>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
}