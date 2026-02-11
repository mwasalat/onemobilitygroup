import React from 'react';

const fetures_data = {
    fetures_one : [
        {
            id: 1, 
            sirial: "01",
            icon: "fas fa-car",
            title: "Auto Rental Services",
            description: <>A comprehensive lineup of vehicles in 20+ categories for daily, monthly, and long-term leases.</>,
        },
        {
            id: 2, 
            sirial: "02",
            icon: "fas fa-taxi",
            title: "Taxi Services",
            description: <>Reliable taxi services spanning multiple cities with 2000+ clean, comfortable vehicles.</>,
        },
    ],

    fetures_two : [
        {
            id: 1, 
            sirial: "03",
            icon: "fas fa-bus",
            title: "Public Transport",
            description: <>600+ buses equipped with Intelligent Transport Systems across major capital cities.</>,
        },
        {
            id: 2, 
            sirial: "04",
            icon: "fas fa-shuttle-van",
            title: "School Transport",
            description: <>350+ school buses with state-of-the-art safety features, experienced drivers, and trained nannies.</>,
        },
    ],

    circle_img: "/assets/img/feature/fea-big.png",
    circle_data: [
        {cls_1: "icon", cls_2: "text", info: <>Reliable mobility solutions <br />  for smarter cities</>,},
        {cls_1: "icon2", cls_2: "text2", info: <>Technology-driven fleet <br />  management & innovation</>,},

    ]
}
const {fetures_one, fetures_two, circle_img, circle_data}  = fetures_data

const FeaturesLevel = () => {
    return (
        <>
            <div className="tp-feature-area pt-115 pb-90">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block pre mb-10">features</span>
                            <h2 className="tp-section-title">
                                Our Core Services
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="row  align-items-start justify-content-center">

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            {fetures_one.map((item, i)  => 
                                <div key={i} className="tp-fea-item p-relative mb-30">
                                    <div className="tp-fea-icon d-flex">
                                        <i className={item.icon}></i>
                                        <div className="fea-big-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                    </div>
                                    <div className="tp-fea-content pt-40">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.description}</p>
                                    </div>
                                </div>
                            )} 
                        </div>

                        <div className="col-lg-6 justify-content-center p-relative d-none d-xl-flex">
                            <div className="tp-fea-big-img p-relative">
                                <img src={circle_img} alt="One Mobility" />
                                {circle_data.map((item, i)  => 
                                    <div key={i} className={`tp-fea-plus-${item.cls_1}`}>
                                        <a href="#"><i className="fal fa-plus"></i></a>
                                        <div className={`fea-plus-icon-${item.cls_2}`}>
                                            <h4 className="m-0">{item.info}</h4>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            {fetures_two.map((item, i)  => 
                                <div key={i} className="tp-fea-item p-relative mb-30">
                                    <div className="tp-fea-icon d-flex">
                                        <i className={item.icon}></i>
                                        <div className="fea-big-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                    </div>
                                    <div className="tp-fea-content pt-40">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.description}</p>
                                    </div>
                                </div>                            
                            )} 
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturesLevel;
