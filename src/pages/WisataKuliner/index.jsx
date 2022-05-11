import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import CardWisataKuliner from "../../components/CardWisataKuliner";
import Footer from "../../components/Footer";

const WisataKuliner = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <section className="wisata-alam">
          {/* <Search /> */}

          <CardWisataKuliner />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WisataKuliner;
