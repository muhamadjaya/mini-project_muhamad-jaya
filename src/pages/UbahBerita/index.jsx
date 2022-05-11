import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FormUbahBerita from "../../components/FormUbahBerita";
import Footer from "../../components/Footer";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const UbahBerita = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <main>
          <FormUbahBerita />
        </main>
      </div>

      {/* <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <FormUbahWisata />
          </div>
        </div>
      </div>
      <Footer /> */}
    </>
  );
};

export default UbahBerita;
