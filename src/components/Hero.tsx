import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Truck, Sprout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fresh Hydroponic Produce <span className="text-green-600">Delivered</span> To Your Door
            </h1>
            <p className="text-lg text-gray-600">
              Earthly Eats connects you directly with local hydroponic farms, delivering nutritious, 
              pesticide-free vegetables and fruits within hours of harvest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-green-600 text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-green-700 transition duration-300"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-md text-center font-semibold hover:bg-green-50 transition duration-300"
              >
                Learn More
              </Link>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">100% Hydroponic</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Same Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Sprout className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">No Chemicals</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl animate-fadeIn">
              <img 
                src="https://images.pexels.com/photos/2894528/pexels-photo-2894528.jpeg" 
                alt="Fresh hydroponic vegetables" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-slideUp">
              <div className="flex items-center gap-2">
                <img 
                  src="https://images.pexels.com/photos/7728083/pexels-photo-7728083.jpeg" 
                  alt="Hydroponic farm" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">From Farm to Table</p>
                  <p className="text-xs text-gray-600">in less than 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;