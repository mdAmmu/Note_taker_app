import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold text-indigo-600">NoteTaker</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="#home" className="text-gray-800 hover:text-indigo-600 font-semibold transition duration-300">
                        Home
                    </a>
                    <a href="#features" className="text-gray-800 hover:text-indigo-600 font-semibold transition duration-300">
                        Features
                    </a>
                    <a href="#reviews" className="text-gray-800 hover:text-indigo-600 font-semibold transition duration-300">
                        Reviews
                    </a>
                    <a href="#contact" className="text-gray-800 hover:text-indigo-600 font-semibold transition duration-300">
                        Contact
                    </a>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <X size={24} className="text-gray-800" />
                        ) : (
                            <Menu size={24} className="text-gray-800" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-4 shadow-lg`}>
                <div className="flex flex-col items-center space-y-4">
                    <a href="#home" className="text-gray-800 hover:text-indigo-600 font-semibold">
                        Home
                    </a>
                    <a href="#features" className="text-gray-800 hover:text-indigo-600 font-semibold">
                        Features
                    </a>
                    <a href="#reviews" className="text-gray-800 hover:text-indigo-600 font-semibold">
                        Reviews
                    </a>
                    <a href="#contact" className="text-gray-800 hover:text-indigo-600 font-semibold">
                        Contact
                    </a>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}