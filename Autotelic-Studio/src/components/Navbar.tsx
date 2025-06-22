import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Declare Fillout global type
declare global {
  interface Window {
    Fillout?: {
      init: () => void;
    };
  }
}

const Navbar: React.FC = () => {
  useEffect(() => {
    // Load Fillout script once when component mounts
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    
    script.onload = () => {
      // Initialize any existing Fillout elements
      if (window.Fillout && typeof window.Fillout.init === 'function') {
        window.Fillout.init();
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://forms.fillout.com/t/p1ruPbqJ1Wus', '_blank');
  };

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
              
              <button
                onClick={handleContactClick}
                className="font-NeueMontreal font-bold text-gray-300 hover:text-white px-6 py-3 rounded-md transition-colors duration-200"
                aria-label="Contact"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
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


