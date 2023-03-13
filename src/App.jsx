import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home, Footer } from "./components/Home";
import { About, Speakers, Register, Committee } from "./components/contents";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
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
        <Footer/>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
