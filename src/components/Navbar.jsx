import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";

const Navbar = ({ cartItems = [], removeItem }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleLogoClick = () => navigate("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
  };

  const toggleCart = () => setCartOpen((prev) => !prev);

  return (
    <nav className="px-2 py-4 border-b border-gray-300">
      <div className="container relative flex items-center justify-between gap-3 mx-auto">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <div className="z-50 cursor-pointer md:hidden" onClick={toggleMenu}>
            {!isOpen ? (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
              </div>
            ) : null}
          </div>

          {/* Logo */}
          <div onClick={handleLogoClick} className="cursor-pointer md:block">
            <img src={Logo} alt="logo" className="h-6" />
          </div>
        </div>

        {/* Navigation Links (For md screens and up) */}
        <div className="items-center hidden gap-6 md:flex">
          {["collection", "men", "women", "about", "contact"].map((link) => (
            <NavLink
              key={link}
              to={`/${link}`}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                  : "hover:text-gray-700"
              }
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black opacity-50 md:hidden"
              onClick={toggleMenu}
            ></div>

            {/* Mobile Menu */}
            <div className="fixed top-0 left-0 z-50 flex flex-col w-2/3 h-screen gap-6 p-6 font-semibold text-gray-700 bg-white shadow-md">
              <div
                className="self-start mb-4 cursor-pointer"
                onClick={toggleMenu}
              >
                <div className="relative w-6 h-6">
                  <div className="absolute left-0 w-4 h-0.5 rotate-45 bg-gray-500 top-1/2"></div>
                  <div className="absolute left-0 w-4 h-0.5 -rotate-45 bg-gray-500 top-1/2"></div>
                </div>
              </div>

              {["collection", "men", "women", "about", "contact"].map(
                (link) => (
                  <NavLink
                    key={link}
                    to={`/${link}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                        : "hover:text-gray-500"
                    }
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </NavLink>
                )
              )}
            </div>
          </>
        )}

        {/* Right Section: Cart + Avatar */}
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
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 h-[18px] w-[18px] text-white rounded-full bg-orange-500 text-xs font-bold flex items-center justify-center">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>

          {/* Avatar */}
          <img
            src={Avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />

          {/* Cart Component */}
          {cartOpen && <Cart cartItems={cartItems} removeItem={removeItem} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
