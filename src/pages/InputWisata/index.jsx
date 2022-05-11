import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FormInputWisata from "../../components/FormInputWisata";
import Footer from "../../components/Footer";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const InputWisata = () => {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <FormInputWisata />
          </div>
        </div>
      </div>
      <Footer /> */}
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />

        <main>
          {/* <h2 className="dash-title">Dasboard Admin</h2> */}

          <FormInputWisata />
        </main>
      </div>
    </>
  );
};

export default InputWisata;
