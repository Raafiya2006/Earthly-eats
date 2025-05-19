import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-semibold">Earthly Eats</span>
            </div>
            <p className="mt-4 text-gray-300">
              Farm to fork hydroponic produce delivered fresh to your doorstep. 
              Sustainable, chemical-free, and nutrient-rich.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=vegetables" className="text-gray-300 hover:text-white transition duration-300">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products?category=fruits" className="text-gray-300 hover:text-white transition duration-300">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products?category=eggs" className="text-gray-300 hover:text-white transition duration-300">
                  Eggs
                </Link>
              </li>
              <li>
                <Link to="/subscriptions" className="text-gray-300 hover:text-white transition duration-300">
                  Weekly Subscriptions
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/hydroponics" className="text-gray-300 hover:text-white transition duration-300">
                  Hydroponic Farming
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-300 hover:text-white transition duration-300">
                  Our Farmers
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-300 hover:text-white transition duration-300">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                support@earthlyeats.com
              </li>
              <li className="text-gray-300">
                +1 (555) 123-4567
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8">
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} Earthly Eats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;