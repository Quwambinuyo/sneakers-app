import React, { useState } from "react";
import Data from "../Data";
import DeleteIcon from "../assets/images/icon-delete.svg";

const Cart = () => {
  const [items, setItems] = useState(Data[0]);

  return (
    <section className="absolute right-0  top-[60px] w-[300px] bg-white rounded-md shadow-md p-4">
      <div className="pt-2 pb-6 pl-2 border-gray-400 border-b-1">
        <h3 className="font-bold">Cart</h3>
      </div>
      <div className="flex items-center gap-2 p-3 h-1/2">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={items.images.thumbnail}
            alt="Item"
            className="w-[50px] h-[50px] object-cover rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">{items.name}</p>
            <button>
              <img src={DeleteIcon} alt="Delete" className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm">$125</p>
            <p className="text-sm">x3</p>
            <p className="font-bold text-md">$375</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-3/4 p-2 font-bold bg-orange-600 rounded-md">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
