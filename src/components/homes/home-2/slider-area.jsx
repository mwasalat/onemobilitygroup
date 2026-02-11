import Link from 'next/link';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const setting = {
    fade:true,
    slidesToShow: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
            }
        }
    ]
}

const slider_data = [
    {
        id: 1,
        col: "col-xxl-6 col-xl-7 col-lg-8 col-md-12", 
        bg_img: "/assets/img/onemobility-assets/banner-1920x-805.png",
        sub_title: "Reliable & sustainable transportation",
        title: "One Mobility Group",
        info: <>Enhancing mass transit approachability, efficiency, and convenience{" "} <br /> for smarter cities worldwide.</>, 
        slider_service_title:  <> <b>26+ Years</b> <br /> Of Excellence </> ,
      },
      {
        id: 2,
        col: "col-xxl-6 col-xl-7 col-lg-8", 
        bg_img: "/assets/img/onemobility-assets/_banner-1920-x-846.png",
        sub_title: "Innovation, sustainability & excellence",
        title: "Best-In-Class Mobility",
        info: <>Auto rental, taxi, public & school transport, insurance,{" "} <br /> trading, service center & technology solutions.</>, 
        slider_service_title:  <> <b>2000+</b> <br /> Vehicles </> ,
      },
]
const SliderArea = () => {
  const sliderRef = useRef(null);

    return (
        <>
            <div className="tp-slider-area">
                <div className="slider-active slider-arrow-style p-relative">
                    <button type="button" onClick={() => sliderRef.current?.slickPrev()} className="slick-prev slick-arrow" >
                        <i className="flaticon-left-arrow"></i>
                    </button>
                    <button type="button" onClick={() => sliderRef.current?.slickNext()} className="slick-next slick-arrow" >
                        <i className="flaticon-right-arrow"></i>
                    </button>
                    <Slider {...setting} ref={sliderRef} >
                        {slider_data.map((item, i) => 
                            <div key={i}> 
                                <div className="tp-slider-item tp-slider-height tp-slider-overlay-2 d-flex align-items-center"
                                    style={{backgroundImage: `url(${item.bg_img})`}}>
                                    <div className="container">
                                    <div className="row justify-content-xxl-end">
                                        <div className={item.col}>
                                            <div className="tp-slider-content tp-slider-content-two ">
                                                <span className="tp-slider-sub-title p-0">{item.sub_title}</span>
                                                <h2 className="tp-slider-title">{item.title}</h2>
                                                <p>{item.info}</p>
                                                <div className="tp-slide-btn-box mt-45">
                                                <div className="slider-btn mr-30">
                                                    <Link  href="/contact" className="tp-btn-white">Get In Touch</Link>
                                                </div>
                                                <div className="slider-btn">
                                                    <Link href="/service" className="tp-btn">Our Services</Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider> 
                </div>
            </div>
        </>
    );
};

export default SliderArea;
