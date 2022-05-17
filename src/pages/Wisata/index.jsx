import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CardWisata from "../../components/CardWisata";
import Footer from "../../components/Footer";

const Wisata = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <section className="wisata-alam">
          <CardWisata />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Wisata;
