import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-3/4 mx-auto">
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
    </div>
  );
}

export default App;
