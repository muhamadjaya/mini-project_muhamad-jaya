import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FormUbahWisata from "../../components/FormUbahWisata";
import Footer from "../../components/Footer";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const UbahWisata = () => {
  return (
    <>
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

      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <main>
          <FormUbahWisata />
        </main>
      </div>
    </>
  );
};

export default UbahWisata;
