import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CardBerita from "../../components/CardBerita";
import Footer from "../../components/Footer";

const Berita = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <section className="berita-wisata">
          <div className="row">
            <div className="row-md-12">{/* <h5>Cari Berita</h5> */}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CardBerita />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
