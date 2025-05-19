import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getPopularProducts } from '../data/products';

const FeaturedProducts: React.FC = () => {
  const popularProducts = getPopularProducts();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
            <p className="text-gray-600 mt-2">Our customers' favorites, harvested fresh today</p>
          </div>
          <Link to="/products" className="text-green-600 hover:text-green-700 font-medium">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;