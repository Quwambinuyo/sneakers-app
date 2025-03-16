import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

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
  };

  // Function to remove items from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="md:min-w-3xl md:max-w-4xl md:p-4 md:mx-auto">
      <BrowserRouter>
        <Navbar cartItems={cartItems} removeItem={removeItem} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/collection" element={<h1>Collection Page</h1>} />
          <Route path="/men" element={<h1>Men's Page</h1>} />
          <Route path="/women" element={<h1>Women's Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
