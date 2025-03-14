import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="py-4 border-b border-gray-300">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left Section: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div onClick={handleLogoClick} className="cursor-pointer">
            <img src={Logo} alt="logo" className="h-6" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden gap-6 text-gray-500 md:flex">
            <li>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-4 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-4 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-4 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-4 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-4 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section: Cart + Avatar */}
        <div className="relative flex items-center gap-6 bg-red-500 group">
          {/* Cart Icon */}
          <img src={cartIcon} alt="cart" className="w-6 h-6 cursor-pointer" />
          {/* Avatar Icon */}
          <img
            src={Avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />

          {/* Cart Component */}
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
