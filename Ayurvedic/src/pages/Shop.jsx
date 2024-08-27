import { useState } from 'react';
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { saman } from '../constants/index';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

const categories = ['Weight loss'];

export default function Shop() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2999]);
  
    const filteredProducts = saman.filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) ||
      product.originalPrice >= priceRange[0] || product.price <= priceRange[1]
    );

    console.log(filteredProducts)
  
    const handleCategoryChange = (category) => {
      setSelectedCategories(prev => 
        prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
      );
    };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid md:grid-cols-[250px_1fr] gap-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={category} 
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={category}>{category}</Label>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <Slider
              min={0}
              max={2999}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Products ({filteredProducts.length})</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
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
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No products found matching the current filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}