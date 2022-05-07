import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import Table from "../../components/Table";

const KelolaWisata = () => {
  return (
    <>
      <Sidebar />
      <Hero />
      <div id="wrap">
        <div className="container mt-5 pt-5" id="main">
          <div className="row">
            <div className="col-12 col-lg-12">
              <Table />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default KelolaWisata;
