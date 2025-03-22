import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { CartContext } from "./components/context/CartContext";

function App() {
  const { successMessage } = useContext(CartContext);
  console.log(successMessage);

  return (
    <div className="md:min-w-3xl md:max-w-4xl md:p-4 md:mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<h1>Collection Page</h1>} />
          <Route path="/men" element={<h1>Men's Page</h1>} />
          <Route path="/women" element={<h1>Women's Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </BrowserRouter>

      {/* Custom success message */}
      {successMessage && (
        <div className="fixed px-4 py-2 text-white transform -translate-x-1/2 bg-green-500 rounded-md shadow-lg top-4 left-1/2">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default App;
