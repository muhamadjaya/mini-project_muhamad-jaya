import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Image1 from "../../assets/images/slide1.png";
import Image2 from "../../assets/images/slide2.png";
import Image3 from "../../assets/images/slide3.png";
import ImageSection1 from "../../assets/images/travel.jpg";
import ImageSection3 from "../../assets/images/news.jpg";

const Beranda = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const check = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* End of Navbar */}

      {/* Hero Section */}
      <div className="hero-section">
        <section className="carousel-section">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item customCarousel active">
                    <img src={Image1} className="d-block w-100" alt="slide-1" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="main-title-carousel">Enjoy in Banten !</h5>
                      <p className="description-title-carousel">
                        Jelajahi beragam destinasi wisata terbaik hanya untuk
                        kamu.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item customCarousel">
                    <img src={Image2} className="d-block w-100" alt="slide-2" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="main-title-carousel">Enjoy in Banten !</h5>
                      <p className="description-title-carousel">
                        Jelajahi beragam destinasi wisata terbaik hanya untuk
                        kamu.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item customCarousel">
                    <img src={Image3} className="d-block w-100" alt="slide-3" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="main-title-carousel">Enjoy in Banten !</h5>
                      <p className="description-title-carousel">
                        Jelajahi beragam destinasi wisata terbaik hanya untuk
                        kamu.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End od Hero Section */}

      {/* Section 1 */}

      <div className="container">
        <section className="section-1">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="section1-left">
                <h5 className="text-primary title-selamat-datang">
                  SELAMAT DATANG DI WONDERFUL BANTEN
                </h5>
                <h1 className="sub-title-selamat-datang">
                  Keindahan alam yang di akui Dunia yang bisa kamu liat di
                  Provinsi Banten
                </h1>
                <p className="deskripsi-selamat-datang">
                  Keindahan alam yang dimiliki Provinsi Banten menjadikannya
                  sebagai wilayah yang masuk rekomendasi untuk dikunjungi saat
                  liburan. Memiliki Pantai, Gunung, Tempat Bersejarah dan Wahana
                  Atraksi yang ada di Provinsi Banten yang siap kalian kunjungi
                  kapan saja.
                </p>
                <button type="button" className="btn btn-primary">
                  Eksplor Sekarang
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="section1-right">
                <img
                  src={ImageSection1}
                  className="img-thumbnail border-0 section1-image"
                  alt="Traveler Images"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* End of Section 1 */}

      {/* Section 2 */}
      <div className="section-rekomendasi-wisata mt-5 ">
        <section className="section-2 pb-5">
          <div className="row pt-5">
            <div className="col-12 col-lg-12">
              <h5 className="text-primary font-weight-bold text-center title-rekomendasi-wisata">
                Rekomendasi Wisata
              </h5>
              <h1 className="text-center sub-titile-rekomendasi-wisata">
                Destinasi Wisata Yang Wajib Anda Kunjungi
              </h1>
              <p className="text-center deskripsi-rekomendasi-wisata">
                Membantu kamu untuk menemukan tempat wisata terbaik yang sesuai
                dengan <br /> keinginan sebelum memulai petualangan mu di
                Banten.
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-lg-12">
              <div className="slider-wisata">
                {/* Slider Wisata */}
                <section id="slider" className="slider-wisata">
                  <input
                    type="radio"
                    name="slider"
                    id="s1"
                    checked={selectedIndex === 0}
                    // onClick={() => check(0)}
                    onChange={() => check(0)}
                  />
                  <input
                    type="radio"
                    name="slider"
                    id="s2"
                    checked={selectedIndex === 1}
                    // onClick={() => check(1)}
                    onChange={() => check(1)}
                  />
                  <input
                    type="radio"
                    name="slider"
                    id="s3"
                    checked={selectedIndex === 2}
                    // onClick={() => check(2)}
                    onChange={() => check(2)}
                  />
                  <label htmlFor="s1" id="slide1">
                    <img
                      className="fea"
                      src="https://picsum.photos/200/200"
                      height="100%"
                      width="100%"
                      alt="slider images"
                    />
                    <h5 className="text-center pt-1">Ujung Kulon</h5>
                  </label>
                  <label htmlFor="s2" id="slide2">
                    <img
                      className="fea"
                      src="https://picsum.photos/200/300"
                      height="100%"
                      width="100%"
                      alt="slider images"
                    />
                    <h5 className="text-center pt-1">Pantai Carita</h5>
                  </label>
                  <label htmlFor="s3" id="slide3">
                    <img
                      className="fea"
                      src="https://picsum.photos/300/300"
                      height="100%"
                      width="100%"
                      alt="slider images"
                    />
                    <h5 className="text-center pt-1">Curug Lewi</h5>
                  </label>
                </section>
                {/* End of Slider Wisata */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Section 2 */}

      {/* Section 3 */}
      <div className="container mt-5 pt-5">
        <section className="section-3">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <div className="section3-left">
                <img
                  src={ImageSection3}
                  className="img-thumbnail border-0 section3-image"
                  alt="Traveler Images"
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="section3-right">
                <h5 className="text-primary title-selamat-datang">
                  BERITA WISATA
                </h5>
                <h1 className="sub-title-selamat-datang">
                  Berita Menarik Terkini Seputar Destinasi Wisata Banten
                </h1>
                <p className="text-justify deskripsi-selamat-datang">
                  Dapatkan berita terkini seputar destinasi wisata yang ada di
                  Banten untuk kamu yang menarik untuk dibaca.
                </p>
                <button type="button" className="btn btn-primary">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Section 3 */}

      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  );
};

export default Beranda;