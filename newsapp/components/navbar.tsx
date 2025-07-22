'use client';

import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 space-x-8">
            {/* Brand */}
            <a href="#" className="text-xl font-semibold text-white">
              Newsbites
            </a>

            {/* Links */}
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
