import React, { useState } from "react";
import minuIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";

const PlusMinusBtn = () => {
  const [quantity, setQuantity] = useState(0);

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="flex items-center bg-gray-200 p-2 rounded-md w-[100px] justify-between">
        <button type="button" className="cursor-pointer" onClick={decrease}>
          <img src={minuIcon} alt="minus" />
        </button>

        <p className="text-sm font-semibold">{quantity}</p>

        <button type="button" className="cursor-pointer" onClick={increase}>
          <img src={plusIcon} alt="plus" />
        </button>
      </div>
    </>
  );
};

export default PlusMinusBtn;
