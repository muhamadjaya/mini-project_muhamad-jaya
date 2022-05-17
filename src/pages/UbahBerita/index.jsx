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
    </>
  );
};

export default UbahBerita;
