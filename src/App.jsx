import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Footer } from "./components/Home";
import { About, Speakers, Register, Committee } from "./components/contents";
import Navbar2 from "./components/Navbar/Navbar2";

function App() {
  const [nav, setNav] = useState(false);
  return (
    <BrowserRouter>
      <Navbar2 nav={nav} setNav={setNav} />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home nav={nav} />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
        <Routes>
          <Route path="/registration-details" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </main>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
