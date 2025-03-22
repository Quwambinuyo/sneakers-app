import { useContext, useState } from "react";
import DeleteIcon from "../assets/images/icon-delete.svg";
import Spinner from "../assets/images/spinner.gif";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { cartItems, removeItem } = useContext(CartContext);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }, 3000);
  };

  return (
    <section className="absolute md:right-0 right-2 top-[60px] md:w-[300px] w-[360px] bg-white rounded-md shadow-md p-4 pb-8 md:pb-2">
      <div className="pt-2 pb-6 pl-2 border-gray-400 border-b-1">
        <h3 className="font-bold">Cart</h3>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px]">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 py-6 md:py-3 h-1/2"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[50px] h-[50px] object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold">{item.name}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="cursor-pointer "
                  >
                    <img src={DeleteIcon} alt="Delete" className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-400">
                    ${item.price}
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    x {item.quantity}
                  </p>
                  <p className="font-bold text-md">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="py-4 text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && !paymentSuccess && (
        <div className="flex items-center justify-center w-[100%]">
          <button
            onClick={handleCheckout}
            className="w-full h-[50px] p-2 font-bold md:h-[40px] bg-orange-500 rounded-md cursor-pointer"
          >
            {loading ? (
              <img src={Spinner} alt="Loading..." className="w-6 h-6 mx-auto" />
            ) : (
              "Checkout"
            )}
          </button>
        </div>
      )}

      {paymentSuccess && (
        <div className="p-4 mt-4 text-center text-green-800 bg-green-100 rounded-md">
          <h4 className="font-bold">Payment Successful!</h4>
        </div>
      )}
    </section>
  );
};

export default Cart;
