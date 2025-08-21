import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Marketing from "./components/Marketing";
import Services from "./components/Services";
import Printing from "./components/Printing";
import Footer from "./components/Footer";
import Features from "./components/Features";
import WhoWeAre from "./components/WhoWeAre";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Services />
      <WhoWeAre />
      <Features />
      <Footer />
      
    </div>
  );
}
