import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const setting = {
  fade: true,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
};

const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/onemobility-assets/banner-1920x-810.png",
    sub_title: "Driving the future of urban mobility",
    title: "One Mobility Group",
    info: (
      <>
        Enhancing mass transit approachability, efficiency, and convenience
        <br /> for smarter cities worldwide.
      </>
    ),
  },
  {
    id: 2,
    bg_img: "/assets/img/onemobility-assets/banner-1920x-810-2.jpg",
    sub_title: "Reliable & sustainable transportation",
    title: "Shaping Smarter Cities",
    info: (
      <>
        Auto rental, taxi, public &amp; school transport, insurance,
        <br /> trading, service center &amp; technology.
      </>
    ),
  },
  {
    id: 3,
    bg_img: "/assets/img/onemobility-assets/banner-1920x-810-3.png",
    sub_title: "Innovation, sustainability & excellence",
    title: "Best-In-Class Mobility",
    info: (
      <>
        Over 26 years of experience delivering the highest level
        <br /> of service in the mobility sector.
      </>
    ),
  },
];

const SliderArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="tp-slider-area">
        <div className="slider-active slider-arrow-style p-relative">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className="slick-prev"
          >
            <i className="flaticon-left-arrow"></i>
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className="slick-next"
          >
            <i className="flaticon-right-arrow"></i>
          </button>

          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item, i) => (
              <div key={i}>
                <div
                  className="tp-slider-item tp-slider-overlay tp-slider-height d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.bg_img})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-8 col-xl-9 col-lg-10">
                        <div className="tp-slider-content">
                          <span className="tp-slider-sub-title">
                            {item.sub_title}
                          </span>
                          <h2 className="tp-slider-title" style={{ whiteSpace: "nowrap" }}>{item.title}</h2>
                          <p>{item.info}</p>
                          <div className="tp-slide-btn-box mt-40">
                            <div className="slider-btn">
                              <Link
                                href="/about"
                                className="tp-btn-white"
                              >
                                Discover More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
