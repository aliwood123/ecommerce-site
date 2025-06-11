import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <nav className="flex justify-center space-x-8 mb-8">
          <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Instagram
          </a>
        </nav>
        <p className="text-gray-500 text-center">
          © {new Date().getFullYear()} Outdoor Apparel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 