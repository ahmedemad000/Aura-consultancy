import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    // { to: '/projects', label: 'Projects' },
    // { to: '/project-showcase', label: 'Project Showcase' },
    // { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/careers', label: 'Careers' },
    // { to: '/video-carousel', label: 'Video Carousel' },
    { to: '/blog', label: 'Blog' },
  ];

  const linkClassName = ({ isActive }) =>
    `block py-2 md:py-0 text-gray-800 hover:text-blue-600 transition-colors duration-200 ${
      isActive ? 'text-blue-600 font-semibold' : ''
    }`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-25 w-auto mx-6 -mt-1 -mb-1" />
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          } absolute md:static top-[60px] left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none mr-6`}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClassName}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;