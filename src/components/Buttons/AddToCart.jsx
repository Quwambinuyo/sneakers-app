import React from "react";
import cartIcon from "../../assets/images/icon-cart.svg";

const AddToCart = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="flex cursor-pointer flex-row items-center gap-2 bg-orange-600  justify-center p-2 rounded-md w-[150px]"
    >
      <img src={cartIcon} alt="cart" className="w-3 h-3" />
      <p className="text-sm font-semibold text-black">Add to cart</p>
    </button>
  );
};

export default AddToCart;
