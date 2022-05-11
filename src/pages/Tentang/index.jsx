import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import ImageTraveler from "../../assets/images/traveler.gif";

const Tentang = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-3 pt-3 mb-5 pb-5">
        <section className="section-1">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="section1-left">
                {/* <h5 className="title-selamat-datang">
                  Tentang Kami
                </h5> */}
                <h2 className="sub-title-selamat-datang">Tentang Kami</h2>
                <p className="deskripsi-selamat-datang">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  modi unde ipsa quod. Odio, voluptatum tempore tempora fugit
                  ipsum quasi praesentium adipisci eum maiores sit, culpa ipsam
                  velit maxime perferendis itaque vitae vero soluta quos et
                  temporibus quidem suscipit cumque! Nisi, nulla modi eaque
                  repellendus velit cupiditate culpa facilis consectetur.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="section1-right pt-5">
                <img
                  src={ImageTraveler}
                  className="img-thumbnail border-0 section1-image"
                  alt="Traveler Images"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
