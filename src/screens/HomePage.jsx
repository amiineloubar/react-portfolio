import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import MyWorks from "../components/MyWorks";
import NavBar from "../components/NavBar";
import Services from "../components/Services";

function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <MainSection />
      <About />
      <Services />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default HomePage;
