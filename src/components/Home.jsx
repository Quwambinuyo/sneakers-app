import { useState } from "react";
import Data from "../Data";
import cartIcon from "../assets/images/icon-cart.svg";
import minuIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const Home = () => {
  const [selectedSneaker, setSelectedSneaker] = useState(Data[0]);

  return (
    <section className="flex gap-20 items-center mt-[100px]">
      {/* Image Section */}
      <div className="flex flex-col items-center">
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={selectedSneaker.images.img}
            alt={selectedSneaker.name}
            className="w-[290px] h-[290px] object-cover rounded-md"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2">
          {Data.map((sneaker) => (
            <button
              key={sneaker.id}
              onClick={() => setSelectedSneaker(sneaker)}
              className={`border-2 rounded-md transition-opacity duration-200 ${
                selectedSneaker.id === sneaker.id
                  ? "border-orange-700 opacity-70"
                  : "border-transparent"
              }`}
            >
              <img
                src={sneaker.images.thumbnail}
                alt={sneaker.name}
                className="w-16 h-16 rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-[500px]">
        <p className="text-sm text-gray-500">SNEAKER COMPANY</p>
        <h1 className="my-4 text-4xl font-bold">{selectedSneaker.name}</h1>
        <p className="text-gray-700">
          These low-casual are your perfect casual wear companion. Featuring a
          durable outer rubber sole, they'll withstand everything the weather
          can offer.
        </p>

        <div className="flex flex-row items-center gap-2 mt-4">
          <h3 className="text-3xl font-bold">$125.00</h3>
          <span className="text-sm font-semibold text-white bg-black p-0.5 rounded-sm">
            50%
          </span>
        </div>

        <div className="flex flex-row items-center gap-6 mt-4">
          {/* Quantity Selector */}
          <div className="flex items-center bg-gray-200 p-2 rounded-md w-[100px] justify-between">
            <button type="button">
              <img src={minuIcon} alt="minus" />
            </button>
            <p className="text-sm font-semibold">0</p>
            <button type="button">
              <img src={plusIcon} alt="plus" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="flex flex-row items-center gap-2 bg-orange-800 justify-center p-2 rounded-md w-[150px]">
            <img src={cartIcon} alt="cart" className="w-3 h-3" />
            <p className="text-sm font-semibold text-black">Add to cart</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
