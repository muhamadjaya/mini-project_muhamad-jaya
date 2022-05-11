import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import CardWisataPantai from "../../components/CardWisataPantai";
import Footer from "../../components/Footer";

const WisataPantai = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <section className="wisata-alam">
          {/* <Search /> */}
          <CardWisataPantai />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WisataPantai;
