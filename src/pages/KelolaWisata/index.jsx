import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import Table from "../../components/Table";

const KelolaWisata = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <Table />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KelolaWisata;
