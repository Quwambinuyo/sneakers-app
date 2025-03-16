import React, { useState } from "react";
import Data from "../Data";
import DeleteIcon from "../assets/images/icon-delete.svg";

const Cart = () => {
  const [items, setItems] = useState(Data[0]);
  return (
    <section className="absolute md:right-0 right-2 top-[60px] md:w-[300px] w-[360px] bg-white rounded-md shadow-md p-4 pb-8 md:pb-2">
      <div className="pt-2 pb-6 pl-2 border-gray-400 border-b-1">
        <h3 className="font-bold">Cart</h3>
      </div>

      {/* Scrollable container for items */}
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px]">
        {" "}
        {/* Adjust max-height as needed */}
        {/* item 1 start */}
        <div className="flex items-center gap-2 py-6 md:py-3 h-1/2">
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
              <p className="text-[10px] font-semibold">{items.name}</p>
              <button>
                <img src={DeleteIcon} alt="Delete" className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-400">
                ${items.price}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                x {items.quantity}
              </p>
              <p className="font-bold text-md">$375</p>
            </div>
          </div>
        </div>
        {/* item 1 end */}
        {/* You can add more items here, and they will be scrollable if there are more than 5 items */}
      </div>

      <div className="flex items-center justify-center w-[100%]">
        <button className="w-full h-[50px] p-2 font-bold md:h-[40px] bg-orange-500 rounded-md cursor-pointer">
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
