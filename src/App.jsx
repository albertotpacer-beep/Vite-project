import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Page3 from "./pages/Page3";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      
      <Route path="/contact" element={<Contact/>} />

      <Route path="/page-three" element={<Page3/>} />
    </Routes>
  );
}

export default App;
