/* const IconMenu = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

 export default IconMenu */

 import React, { useState } from "react";
import IconMenu from "./IconMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <IconMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-lg animate-slideDown">
          <li><a href="#home" className="block">Home</a></li>
          <li><a href="#about" className="block">About</a></li>
          <li><a href="#projects" className="block">Projects</a></li>
          <li><a href="#contact" className="block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
