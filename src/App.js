// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Gemeinden from "./components/Gemeinden/Gemeinden"; // Importă componenta Gemeinden
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import "./App.css"; // Importă stilurile globale

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Gallery />
      <Gemeinden /> {/* Include componenta Gemeinden */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
