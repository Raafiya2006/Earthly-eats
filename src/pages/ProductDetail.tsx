import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShoppingCart, Truck, Leaf, CalendarDays, Info } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(id) : undefined;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300"
        >
          Browse Products
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const formatHarvestDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <button 
          onClick={() => navigate('/products')}
          className="flex items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Products
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
          
          {/* Product Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-1">
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
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">From {product.farmSource.name}, {product.farmSource.location}</p>
          
          <div className="flex items-baseline mb-6">
            <span className="text-2xl font-bold text-green-600 mr-2">${product.price.toFixed(2)}</span>
            <span className="text-gray-500">per {product.unit}</span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Product Meta Info */}
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <Leaf className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Hydroponically grown without pesticides</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Harvested on {formatHarvestDate(product.harvestDate)}</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Same day delivery available</span>
              </div>
            </div>
          </div>
          
          {/* Add to Cart */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-24">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-green-700 transition duration-300"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>
          
          {/* Nutritional Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <Info className="h-5 w-5 mr-1 text-green-600" />
              Nutritional Information
            </h3>
            <p className="text-gray-700">{product.nutritionalInfo}</p>
          </div>
        </div>
      </div>
      
      {/* How It's Grown Section */}
      <section className="my-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It's Grown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in a water solvent. 
              Plants grown hydroponically tend to grow faster and produce higher yields because nutrients are delivered directly to the plant's root system.
            </p>
            <p className="text-gray-700 mb-4">
              Our hydroponic farms use state-of-the-art technology to create the perfect growing environment, monitoring temperature, 
              humidity, pH levels, and nutrient concentration to produce the healthiest, tastiest produce possible.
            </p>
            <p className="text-gray-700">
              The absence of soil means no soil-borne diseases or pests, eliminating the need for pesticides and herbicides. 
              This results in cleaner, safer food for you and your family.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg" 
              alt="Hydroponic farming" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;