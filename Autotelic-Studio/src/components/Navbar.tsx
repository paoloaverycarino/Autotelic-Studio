import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black sticky top-0 w-full z-50">
      <div className="w-full px-12 sm:px-16 lg:px-24" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
        <div className="flex items-center justify-between h-20">
          {/* Logo as button */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-2xl font-bold tracking-wide px-4 py-2 rounded-md hover:bg-gray-800 transition"
              role="button"
              aria-label="Go to Home"
            >
              Autotelic Studio
            </Link>
          </div>
          
          <div className="hidden md:flex justify-end">
            <div className="flex items-center gap-12 text-lg font-medium">
              {/* Video dropdown */}
              <div className="relative group">
                <button
                  className="font-NeueMontreal font-bold text-gray-300 hover:text-white px-6 py-3 rounded-md focus:outline-none transition-colors duration-200"
                >
                  Video
                </button>
                <div className="font-NeueMontreal font-bold absolute left-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                  <Link
                    to="/shortform"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-t-md"
                  >
                    Short-form
                  </Link>
                  <Link
                    to="/longform"
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-b-md"
                  >
                    Long-form
                  </Link>
                </div>
              </div>

              <Link
                to="/photo"
                className="font-NeueMontreal font-bold text-gray-300 hover:text-white px-6 py-3 rounded-md transition-colors duration-200"
              >
                Photo
              </Link>

              <Link
                to="/about"
                className="font-NeueMontreal font-bold text-gray-300 hover:text-white px-6 py-3 rounded-md transition-colors duration-200"
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className="font-NeueMontreal font-bold text-gray-300 hover:text-white px-6 py-3 rounded-md transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


