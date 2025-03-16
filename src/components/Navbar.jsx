import React, { useState } from "react";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Data from "../Data";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <nav className="px-2 py-4 border-b border-gray-300">
      <div className="container relative flex items-center justify-between gap-3 mx-auto">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu  */}
          <div className="z-50 cursor-pointer md:hidden" onClick={toggleMenu}>
            {!isOpen ? (
              // Hamburger Icon
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Logo */}
          <div onClick={handleLogoClick} className="cursor-pointer md:block">
            <img src={Logo} alt="logo" className="h-6" />
          </div>
        </div>

        {/* Navigation Links (For md screens and up) */}
        <div className="items-center hidden gap-6 md:flex">
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-700"
            }
          >
            Collections
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-700"
            }
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-700"
            }
          >
            Women
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-700"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-700"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="relative z-30 flex items-center gap-6">
          <div className="relative">
            {/* Cart Icon */}
            <img
              src={cartIcon}
              alt="cart"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleCart}
            />
            {/* Cart Quantity Badge */}
            <h3 className="absolute -top-2 -right-3 p-[10px] h-[12px] w-[12px] text-white rounded-full bg-orange-500 text-xs font-bold flex items-center justify-center">
              0
            </h3>
          </div>

          {/* Avatar */}
          <img
            src={Avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {cartOpen && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
