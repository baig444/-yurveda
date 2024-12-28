import { saman } from '../constants/index';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Shop() {
  return (
    <div className="">
       {/* Hero Section */}
       <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-20 -top-20 w-[400px] h-[400px] rounded-full bg-green-500 flex items-center justify-center p-12">
                <h2 className="text-3xl font-bold text-white text-center">
                  Innovation, without compromise
                </h2>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className=" overflow-hidden aspect-rectangle">
                <img
                  src="https://www.parsicuisine.com/wp-content/uploads/2015/01/health.jpg"
                  alt="Innovation in healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='py-16 mt-5 bg-gradient-to-br from-green-100 to-white px-10'>
       <h1 className='text-3xl font-bold'>With the largest portfolio of any pharmaceutical company in the world, we are all in for better health.</h1>
       <p className='text-lg mt-4'>Healthix life is proud to deliver more than 3,500 different products to patients in more than 58 countries. Every day nearly 200 million people around the globe take a Healthix life medicine, while in the US alone, more than 1 million prescriptions are filled daily with a Healthix life product.</p>
      </section>
      <h1 className="text-4xl font-bold mt-14 mb-10 px-4">Product List</h1>
        <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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