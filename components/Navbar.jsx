"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              My Portfolio
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="#home"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-lg"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden block">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-lg"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-lg"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-lg"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-gray-400 block px-3 py-2 rounded-md text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
