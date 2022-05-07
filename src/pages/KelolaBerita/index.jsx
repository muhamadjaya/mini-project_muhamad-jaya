import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import TableBerita from "../../components/TableBerita";

const KelolaBerita = () => {
  return (
    <>
      <Sidebar />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <TableBerita />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KelolaBerita;
