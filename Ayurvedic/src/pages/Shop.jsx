import { useState } from 'react';
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Star } from "lucide-react";

// Enhanced mock product data
const products = [
  { id: 1, name: "Premium Laptop", category: "Electronics", price: 999, oldPrice: 1299, rating: 4.5, description: "High-performance laptop with the latest features", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Smartphone X", category: "Electronics", price: 699, oldPrice: 799, rating: 4.2, description: "Next-gen smartphone with advanced camera system", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Wireless Headphones", category: "Electronics", price: 199, oldPrice: 249, rating: 4.0, description: "Noise-cancelling headphones with superior sound quality", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Designer T-shirt", category: "Clothing", price: 29, oldPrice: 39, rating: 3.8, description: "Comfortable and stylish t-shirt for everyday wear", image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Premium Jeans", category: "Clothing", price: 59, oldPrice: 79, rating: 4.1, description: "High-quality denim jeans with perfect fit", image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Running Sneakers", category: "Footwear", price: 89, oldPrice: 119, rating: 4.3, description: "Lightweight and durable sneakers for athletes", image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Smart Watch", category: "Accessories", price: 159, oldPrice: 199, rating: 4.4, description: "Feature-packed smartwatch with health monitoring", image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Travel Backpack", category: "Accessories", price: 49, oldPrice: 69, rating: 4.2, description: "Spacious and durable backpack for all your adventures", image: "/placeholder.svg?height=200&width=200" },
];

const categories = ["Electronics", "Clothing", "Footwear", "Accessories"];

export default function Shop() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1300]);
  
    const filteredProducts = products.filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  
    const handleCategoryChange = (category) => {
      setSelectedCategories(prev => 
        prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
      );
    };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
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
              max={1300}
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
              <div key={product.id} className="border rounded-lg p-4 shadow-sm flex flex-col">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <p className="text-sm mb-2 flex-grow">{product.description}</p>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice}</span>
                  </div>
                  <span className="text-green-600 font-semibold">
                    {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                  </span>
                </div>
              </div>
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