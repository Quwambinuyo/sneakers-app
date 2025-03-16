import { useState } from "react";
import Data from "../Data";
import cartIcon from "../assets/images/icon-cart.svg";
import minuIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const Home = ({ addToCart }) => {
  const [selectedSneaker, setSelectedSneaker] = useState(Data[0]);
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message visibility

  // Function to handle increment
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate the discount price based on the discount percentage
  const calculateDiscountPrice = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        ...selectedSneaker,
        image: selectedSneaker.images.thumbnail,
      },
      quantity
    );
  };

  return (
    <section className="flex flex-col md:flex-row md:gap-8 md:mt-[50px] items-center pb-3">
      <div className="flex flex-col items-center md:w-[500px]">
        <div className="mb-4">
          <img
            src={selectedSneaker.images.img}
            alt={selectedSneaker.name}
            className="w-full object-cover md:rounded-md md:min-w-[350px] md:h-[350px]"
          />
        </div>

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

      <div className="flex flex-col items-center px-3 text-center md:items-start md:text-left">
        <p className="text-sm text-gray-500">SNEAKER COMPANY</p>
        <h1 className="my-4 text-4xl font-bold">{selectedSneaker.name}</h1>
        <p className="text-gray-700">
          These low-casual are your perfect casual wear companion. Featuring a
          durable outer rubber sole, they'll withstand everything the weather
          can offer.
        </p>

        <div className="flex flex-col mt-4 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-bold">
              ${" "}
              {calculateDiscountPrice(
                selectedSneaker.price,
                selectedSneaker.discount
              )}
            </h3>
            <span className="p-1 text-sm font-semibold text-white bg-black rounded-sm">
              {selectedSneaker.discount}%
            </span>
          </div>

          <h4 className="mt-1 text-sm text-gray-500 line-through md:mt-0">
            ${selectedSneaker.price}
          </h4>
        </div>

        <div className="flex flex-col items-center w-full gap-4 mt-4 md:flex-row md:gap-8">
          <div className="flex items-center bg-gray-200 p-3 rounded-md w-[80%] md:w-[120px] justify-between">
            <button
              type="button"
              onClick={decrementQuantity}
              className="cursor-pointer"
            >
              <img src={minuIcon} alt="minus" />
            </button>
            <p className="text-sm font-semibold">{quantity}</p>
            <button
              type="button"
              onClick={incrementQuantity}
              className="cursor-pointer"
            >
              <img src={plusIcon} alt="plus" />
            </button>
          </div>

          <button
            className="flex flex-row items-center gap-2 bg-orange-500 justify-center p-3 rounded-md w-[80%] md:w-[180px] cursor-pointer"
            onClick={handleAddToCart}
          >
            <img src={cartIcon} alt="cart" className="w-4 h-4" />
            <p className="text-sm font-semibold text-black">Add to cart</p>
          </button>
        </div>
      </div>

      {/* Custom success message */}
      {successMessage && (
        <div className="fixed px-4 py-2 text-white transform -translate-x-1/2 bg-green-500 rounded-md shadow-lg top-4 left-1/2">
          {successMessage}
        </div>
      )}
    </section>
  );
};

export default Home;
