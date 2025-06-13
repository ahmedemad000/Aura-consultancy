import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Replace with your logo path, e.g., '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" />
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/project-showcase"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Project Showcase
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/video-carousel"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Video Carousel
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
                isActive ? 'text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;