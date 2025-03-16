import { useState } from "react";
import Data from "../Data";
import cartIcon from "../assets/images/icon-cart.svg";
import minuIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const Home = () => {
  const [selectedSneaker, setSelectedSneaker] = useState(Data[0]);

  return (
    <section className="flex  flex-col md:flex-row md:gap-8 md:mt-[50px] items-center">
      {/* Image Section */}
      <div className="flex flex-col items-center md:w-[500px]">
        {/* Main Image */}
        <div className="mb-4">
          <img
            src={selectedSneaker.images.img}
            alt={selectedSneaker.name}
            className="w-full object-cover md:rounded-md md:min-w-[350px] md:h-[350px]"
          />
        </div>

        {/* Thumbnails - Hidden on Mobile */}
        <div className="hidden gap-2 md:flex md:gap-4">
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
                className="w-20 h-20 rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center px-3 text-center md:items-start md:text-left">
        <p className="text-sm text-gray-500">SNEAKER COMPANY</p>
        <h1 className="my-4 text-4xl font-bold">{selectedSneaker.name}</h1>
        <p className="text-gray-700">
          These low-casual are your perfect casual wear companion. Featuring a
          durable outer rubber sole, they'll withstand everything the weather
          can offer.
        </p>

        {/* Price Section */}
        <div className="flex flex-col mt-4 md:flex-row md:items-center md:gap-8">
          {/* Price & Discount */}
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-bold">$125.00</h3>
            <span className="p-1 text-sm font-semibold text-white bg-black rounded-sm">
              50%
            </span>
          </div>

          {/* Original Price */}
          <h4 className="mt-1 text-sm text-gray-500 line-through md:mt-0">
            $250.00
          </h4>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row md:gap-8">
          {/* Quantity Selector */}
          <div className="flex items-center bg-gray-200 p-3 rounded-md w-[80%] md:w-[120px] justify-between">
            <button type="button">
              <img src={minuIcon} alt="minus" />
            </button>
            <p className="text-sm font-semibold">0</p>
            <button type="button">
              <img src={plusIcon} alt="plus" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="flex flex-row items-center gap-2 bg-orange-800 justify-center p-3 rounded-md w-[80%] md:w-[180px]">
            <img src={cartIcon} alt="cart" className="w-4 h-4" />
            <p className="text-sm font-semibold text-black">Add to cart</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
