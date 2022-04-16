import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Consulting from "./components/pages/Consulting";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import Marketing from "./components/pages/Marketing";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/consulting" element={<Consulting />} />
    </Routes>
  );
}

export default App;
