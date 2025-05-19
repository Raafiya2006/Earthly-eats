import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Product Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">New</span>
          )}
          {product.isPopular && (
            <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">Popular</span>
          )}
          {product.isHydroFresh && (
            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">HydroFresh</span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.farmSource.name}</p>
          </div>
          <div className="text-green-600 font-semibold">
            ${product.price.toFixed(2)}
            <span className="text-gray-500 text-sm">/{product.unit}</span>
          </div>
        </div>
        
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-xs text-gray-500">
            <span className="block">Harvested on {new Date(product.harvestDate).toLocaleDateString()}</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition duration-300"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;