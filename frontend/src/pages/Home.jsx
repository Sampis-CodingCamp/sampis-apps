import React from "react";
import Header from "../components/Header";
import Media from "../components/Media";
import About from "../components/About";
import Stat from "../components/Stat";
import Visi from "../components/Visi";
import Artikel from "../components/Artikel";
import Story from "../components/Story";
import Maps from "../components/Maps";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Header />
      <Media />
      <About />
      <Stat />
      <Visi />
      <Artikel />
      <Maps />
      <Story />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
