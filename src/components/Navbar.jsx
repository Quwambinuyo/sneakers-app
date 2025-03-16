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
          <NavLink to="/" className="text-2xl font-bold">
            Sneaker Shop
          </NavLink>
        </div>

        <div className="relative z-30 flex items-center gap-6">
          <div className="relative">
            <img
              src={cartIcon}
              alt="cart"
              className="w-6 h-6 cursor-pointer"
              onClick={toggleCart}
            />
            <h3 className="absolute -top-2 -right-3 p-[10px] h-[12px] w-[12px] text-white rounded-full bg-orange-500 text-xs font-bold flex items-center justify-center">
              {cartItems.length}
            </h3>
          </div>

          <img
            src={Avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {cartOpen && <Cart cartItems={cartItems} removeItem={removeItem} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
