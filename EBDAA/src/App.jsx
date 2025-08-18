import React, { useRef } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Marketing from "./components/Marketing";
import Services from "./components/Services";
import Printing from "./components/Printing";
import PrintingBar from "./components/PrintingBar";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Marketing />
      <Services />
      <Printing />
      <PrintingBar />
      <Features />
      <Footer />
      
    </div>
  );
}
