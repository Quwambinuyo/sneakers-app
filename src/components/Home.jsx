import React from "react";
import Sneakers1 from "../assets/images/image-product-1.jpg";
import AddToCart from "../assets/images/icon-cart.svg";
import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const Home = () => {
  return (
    <section className="flex gap-20 items-center mt-[100px]">
      {/* Image Section */}
      <div className="flex flex-col items-center">
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={Sneakers1}
            alt="sneakers-1"
            className="w-[290px] h-[290px] object-cover rounded-md"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 ">
          <button className="border-2 border-orange-700 rounded-md">
            <img
              src={Thumbnail1}
              alt=""
              className="w-16 h-16 rounded-md opacity-50"
            />
          </button>
          <button>
            <img src={Thumbnail2} alt="" className="w-16 h-16 rounded-md" />
          </button>
          <button>
            <img src={Thumbnail3} alt="" className="w-16 h-16 rounded-md" />
          </button>
          <button>
            <img src={Thumbnail4} alt="" className="w-16 h-16 rounded-md" />
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-[500px]">
        <p className="text-sm text-gray-500">SNEAKER COMPANY</p>
        <h1 className="my-4 text-4xl font-bold">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-700">
          These low-casual are your perfect casual wear companion. Featuring a
          durable outer rubber sole, they'll withstand everything the weather
          can offer.
        </p>
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-2xl font-bold">$125.00</h3>
          <span className="p-[6px] text-sm rounded-md font-bold text-white bg-black flex items-center justify-center">
            50%
          </span>
        </div>
        <p className="font-semibold text-gray-500 line-through">$250</p>

        {/* Quantity Selector and Add to Cart Section */}
        <div className="flex flex-row items-center gap-3 mt-4">
          {/* Quantity Selector */}
          <div className="inline-flex items-center gap-2 p-2 bg-gray-200 rounded-md">
            {/* Minus Button */}
            <button className="flex items-center justify-center p-2">
              <img src={Minus} alt="minus" />
            </button>
            {/* Quantity Display */}
            <h4 className="text-sm font-bold">0</h4>
            {/* Plus Button */}
            <button className="flex items-center justify-center p-2">
              <img src={Plus} alt="plus" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 font-bold text-black bg-orange-700 rounded-md h-[40px]">
              <img
                src={AddToCart}
                alt="add-to-cart"
                className="w-4 h-4 text-black"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
