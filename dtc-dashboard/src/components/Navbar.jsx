import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Bus } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="animate-bounce text-blue-600">
          <Bus className="w-8 h-8" />
        </div>
        <div className="text-2xl font-extrabold tracking-wider flex items-center gap-2">
          <span className="text-blue-700">DTC</span>
          <span className="text-cyan-500">Smart Scheduler</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
        {["Dashboard", "Drivers", "Buses", "Routes"].map((item, i) => (
          <li
            key={i}
            className="group relative overflow-hidden cursor-pointer text-lg transition duration-300 hover:text-blue-600"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </li>
        ))}
      </ul>

      {/* User Avatar */}
      <div className="hidden md:flex items-center gap-3 group relative">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="User"
          className="rounded-full w-10 h-10 ring-2 ring-blue-500 ring-offset-2 
               transition-transform duration-300 hover:scale-110 
               hover:ring-cyan-400 shadow-md"
        />

        {/* Username with animation on hover */}
        <span
          className="text-gray-800 font-semibold transition-all duration-300 
                   group-hover:text-blue-600 group-hover:translate-x-1"
        >
          Admin
        </span>

        {/* Tooltip on hover */}
        <div
          className="absolute top-12 left-1/2 -translate-x-1/2 w-max bg-black text-white 
                  text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 pointer-events-none z-50"
        >
          Logged in as Admin
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full border border-blue-300 shadow-md 
               hover:shadow-blue-300/50 transition-all duration-300 
               hover:scale-110 active:scale-95 focus:outline-none 
               focus:ring-2 focus:ring-blue-400"
        >
          <span
            className={`transition-transform duration-300 ease-in-out ${
              mobileMenuOpen
                ? "rotate-90 text-red-500"
                : "rotate-0 text-blue-600"
            }`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-xl px-6 py-4 md:hidden z-50 animate-slideFadeDown rounded-b-2xl">
          <ul className="flex flex-col space-y-5 text-gray-800 font-medium">
            {["Dashboard", "Drivers", "Buses", "Routes"].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-blue-600 hover:underline underline-offset-4 
                     transition-all duration-200 ease-in-out cursor-pointer 
                     hover:scale-105"
              >
                {item}
              </li>
            ))}
            <li className="border-t pt-4 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="User"
                className="rounded-full w-8 h-8 ring-2 ring-blue-500 ring-offset-2 transition-all duration-300 hover:scale-105"
              />
              <span className="text-gray-800 font-semibold">Admin</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
