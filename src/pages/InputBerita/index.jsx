import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import FormInputBerita from "../../components/FormInputBerita";

const InputBerita = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <FormInputBerita />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InputBerita;
