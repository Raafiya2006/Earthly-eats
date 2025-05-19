import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Leaf, ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Earthly Eats</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition duration-300">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition duration-300">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition duration-300">
              Our Mission
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-green-600 transition duration-300 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-green-600 transition duration-300">
                  <User className="h-6 w-6 mr-1" />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                    Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                    Orders
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                Sign In
              </Link>
            )}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <Link to="/cart" className="text-gray-700 mr-4 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/products" 
              className="block px-3 py-2 text-gray-700 hover:bg-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link to="/about" 
              className="block px-3 py-2 text-gray-700 hover:bg-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" 
                  className="block px-3 py-2 text-gray-700 hover:bg-green-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link to="/orders" 
                  className="block px-3 py-2 text-gray-700 hover:bg-green-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Orders
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-100 rounded-md"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link to="/login" 
                className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;