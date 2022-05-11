import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import CardWisataAlam from "../../components/CardWisataAlam";
import Footer from "../../components/Footer";

const WisataAlam = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <section className="wisata-alam">
          {/* <Search /> */}

          <CardWisataAlam />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WisataAlam;
