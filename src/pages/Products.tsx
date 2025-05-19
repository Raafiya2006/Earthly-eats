import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';
import { Filter, X } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [categoryFilter, setCategoryFilter] = useState<string>(searchParams.get('category') || '');
  const [labelFilter, setLabelFilter] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{min: number, max: number}>({min: 0, max: 50});
  
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (categoryFilter) {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Apply label filters
    if (labelFilter.length > 0) {
      result = result.filter(product => {
        return (
          (labelFilter.includes('new') && product.isNew) ||
          (labelFilter.includes('popular') && product.isPopular) ||
          (labelFilter.includes('hydrofresh') && product.isHydroFresh)
        );
      });
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(result);
  }, [categoryFilter, labelFilter, priceRange]);

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(prev => prev === category ? '' : category);
  };
  
  const handleLabelToggle = (label: string) => {
    setLabelFilter(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label) 
        : [...prev, label]
    );
  };
  
  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const resetFilters = () => {
    setCategoryFilter('');
    setLabelFilter([]);
    setPriceRange({min: 0, max: 50});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Fresh Products</h1>
        
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 lg:hidden bg-white p-2 rounded-md border border-gray-300"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 bg-white p-6 rounded-lg shadow-md h-fit">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button 
              onClick={resetFilters}
              className="text-sm text-green-600 hover:text-green-700"
            >
              Reset All
            </button>
          </div>
          
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Categories</h3>
            <div className="space-y-2">
              {['vegetables', 'fruits', 'eggs'].map(category => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={categoryFilter === category}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`category-${category}`} className="ml-2 text-gray-700 capitalize">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Labels */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Labels</h3>
            <div className="space-y-2">
              {[
                {id: 'new', label: 'New Arrivals'},
                {id: 'popular', label: 'Popular Items'},
                {id: 'hydrofresh', label: 'HydroFresh'}
              ].map(item => (
                <div key={item.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`label-${item.id}`}
                    checked={labelFilter.includes(item.id)}
                    onChange={() => handleLabelToggle(item.id)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`label-${item.id}`} className="ml-2 text-gray-700">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <h3 className="text-md font-medium mb-2">Price Range</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">
                  Min Price: ${priceRange.min}
                </label>
                <input
                  type="range"
                  id="min-price"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange.min}
                  onChange={e => handlePriceChange('min', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">
                  Max Price: ${priceRange.max}
                </label>
                <input
                  type="range"
                  id="max-price"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange.max}
                  onChange={e => handlePriceChange('max', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Filters - Mobile */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
            <div className="w-80 bg-white h-full p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-medium">Apply Filters</h3>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  Reset All
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  {['vegetables', 'fruits', 'eggs'].map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-category-${category}`}
                        checked={categoryFilter === category}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`mobile-category-${category}`} className="ml-2 text-gray-700 capitalize">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Labels */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-2">Labels</h3>
                <div className="space-y-2">
                  {[
                    {id: 'new', label: 'New Arrivals'},
                    {id: 'popular', label: 'Popular Items'},
                    {id: 'hydrofresh', label: 'HydroFresh'}
                  ].map(item => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-label-${item.id}`}
                        checked={labelFilter.includes(item.id)}
                        onChange={() => handleLabelToggle(item.id)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`mobile-label-${item.id}`} className="ml-2 text-gray-700">
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-md font-medium mb-2">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="mobile-min-price" className="block text-sm text-gray-600 mb-1">
                      Min Price: ${priceRange.min}
                    </label>
                    <input
                      type="range"
                      id="mobile-min-price"
                      min="0"
                      max="50"
                      step="1"
                      value={priceRange.min}
                      onChange={e => handlePriceChange('min', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile-max-price" className="block text-sm text-gray-600 mb-1">
                      Max Price: ${priceRange.max}
                    </label>
                    <input
                      type="range"
                      id="mobile-max-price"
                      min="0"
                      max="50"
                      step="1"
                      value={priceRange.max}
                      onChange={e => handlePriceChange('max', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Product Grid */}
        <div className="flex-1">
          {/* Active Filter Pills */}
          {(categoryFilter || labelFilter.length > 0 || priceRange.min > 0 || priceRange.max < 50) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categoryFilter && (
                <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <span className="capitalize">{categoryFilter}</span>
                  <button 
                    onClick={() => setCategoryFilter('')}
                    className="ml-2 text-green-800 hover:text-green-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              
              {labelFilter.map(label => (
                <div key={label} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <span className="capitalize">{label}</span>
                  <button 
                    onClick={() => handleLabelToggle(label)}
                    className="ml-2 text-green-800 hover:text-green-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {(priceRange.min > 0 || priceRange.max < 50) && (
                <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <span>Price: ${priceRange.min} - ${priceRange.max}</span>
                  <button 
                    onClick={() => setPriceRange({min: 0, max: 50})}
                    className="ml-2 text-green-800 hover:text-green-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              
              <button 
                onClick={resetFilters}
                className="text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Clear All
              </button>
            </div>
          )}
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or browse our categories</p>
              <button 
                onClick={resetFilters}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;