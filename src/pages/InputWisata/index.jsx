import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FormInputWisata from "../../components/FormInputWisata";
import Footer from "../../components/Footer";

const InputWisata = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <FormInputWisata />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InputWisata;
