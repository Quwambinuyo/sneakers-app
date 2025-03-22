import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Function to add items to the cart
  const addToCart = (sneaker, quantity) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === sneaker.id
    );

    if (existingItemIndex >= 0) {
      // Update quantity if the sneaker is already in the cart
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { ...sneaker, quantity }]);
    }

    // Show success message when item is added to cart
    setSuccessMessage("Item added to cart!");
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  // Function to remove items from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));

    // Show success message when item is removed from cart
    setSuccessMessage("Item removed from cart!");
    // setTimeout(() => setSuccessMessage(""), 2000);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, successMessage }}
    >
      {children}
    </CartContext.Provider>
  );
};
