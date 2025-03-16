import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // For managing cart visibility

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen); // Toggle the cart visibility
  };

  return (
    <nav className="px-2 py-4 border-b border-gray-300">
      <div className="container relative flex items-center justify-between gap-3 mx-auto">
        {/* Left Section: Hamburger + Logo */}
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
                : "hover:text-gray-900"
            }
          >
            Collections
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-900"
            }
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-900"
            }
          >
            Women
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                : "hover:text-gray-900"
            }
          >
            Contact
          </NavLink>
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
            <div className="fixed top-0 left-0 z-50 flex flex-col w-2/3 h-screen gap-6 p-6 text-gray-500 bg-white shadow-md">
              {/* Close (X) Button Inside Menu */}
              <div
                className="self-start mb-4 cursor-pointer"
                onClick={toggleMenu}
              >
                <div className="relative w-6 h-6">
                  <div className="absolute left-0 w-4 h-0.5 rotate-45 bg-gray-500 top-1/2"></div>
                  <div className="absolute left-0 w-4 h-0.5 -rotate-45 bg-gray-500 top-1/2"></div>
                </div>
              </div>

              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Collections
              </NavLink>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Men
              </NavLink>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Women
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold border-b-2 pb-2 border-orange-700"
                    : "hover:text-gray-900"
                }
              >
                Contact
              </NavLink>
            </div>
          </>
        )}

        {/* Right Section: Cart + Avatar */}
        <div className="relative z-30 flex items-center gap-6">
          <img
            src={cartIcon}
            alt="cart"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleCart} // Toggle cart visibility
          />
          <img
            src={Avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {cartOpen && <Cart />} {/* Render cart if open */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
