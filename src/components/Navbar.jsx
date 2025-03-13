import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

const Navbar = () => {
  return (
    <nav className="py-4 border-b border-gray-300">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <img src={Logo} alt="logo" className="h-6" />

          {/* Navigation Links */}
          <ul className="flex gap-6 text-gray-500">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-gray-900"
                }
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-gray-900"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-gray-900"
                }
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-gray-900"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-gray-900"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section: Cart + Avatar */}
        <div className="flex items-center gap-6">
          <img src={Cart} alt="cart" className="w-6 h-6 cursor-pointer" />
          <img
            src={Avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
