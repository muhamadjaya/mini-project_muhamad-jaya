import React from "react";
import Sidebar from "../../components/Sidebar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../../assets/images/slide1.png";

const TrySidebar = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-10">
          <Carousel responsive={responsive}>
            <div className="card h-100 me-3">
              <img src={Image1} className="card-img-top" alt="image-berita" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div className="card h-100 me-3">
              <img src={Image1} className="card-img-top" alt="image-berita" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div className="card h-100 me-3">
              <img src={Image1} className="card-img-top" alt="image-berita" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>

            <div className="card h-100 me-3">
              <img src={Image1} className="card-img-top" alt="image-berita" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default TrySidebar;
