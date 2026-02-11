import React from "react";
import Slider from "react-slick";

const brands = [
  "/assets/img/onemobility-assets/entities-logos/aman public transport.jpg",
  "/assets/img/onemobility-assets/entities-logos/AMAN_Taxi-01-01-01.png",
  "/assets/img/onemobility-assets/entities-logos/Autostrad Logo 2.png",
  "/assets/img/onemobility-assets/entities-logos/colemont.jpg",
  "/assets/img/onemobility-assets/entities-logos/Fastline Bus Logo-01.png",
  "/assets/img/onemobility-assets/entities-logos/Mwasalat Logo (AR_EN).png",
  "/assets/img/onemobility-assets/entities-logos/One Technology logo.png",
  "/assets/img/onemobility-assets/entities-logos/Pioneer logo-01.png",
];

const setting = {
  slidesToShow: 5,
  arrows: false,
  autoplay: true,
  Infinity: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

const BrandArea = () => {
  return (
    <>
      <div className="tp-brand-area p-relative black-bg pt-100 pb-100">
        <div className="container">
          <div className="row brand-power">
            <div className="tp-brand-active">
              <Slider {...setting}>
                {brands.map((item, i) => (
                  <div key={i} className="col-xl" style={{ padding: "0 15px" }}>
                    <div
                      className="tp-brand-item"
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "120px",
                        margin: "0 5px",
                      }}
                    >
                      <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <img
                          src={item}
                          alt="One Mobility Group Entity"
                          style={{
                            maxHeight: "80px",
                            maxWidth: "100%",
                            objectFit: "contain",
                            filter: "none",
                            opacity: 1,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="tp-brand-big-text text-center">
          <h3>Our Entities</h3>
        </div>
      </div>
    </>
  );
};

export default BrandArea;
