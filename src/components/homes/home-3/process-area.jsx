import Link from 'next/link';
import React from 'react';

const process_data = [
    {id: 1, icon: "fas fa-car", title: "Vehicle Selection"},
    {id: 2, icon: "fas fa-file-contract", title: "Booking & Reservation"},
    {id: 3, icon: "fas fa-route", title: "Route Planning"},
    {id: 4, icon: "fas fa-satellite-dish", title: "Fleet Monitoring"},
    {id: 5, icon: "fas fa-tools", title: "Maintenance & Service"},
    {id: 6, icon: "fas fa-headset", title: "24/7 Customer Support"}, 
]

const ProcessArea = () => {
    return (
        <>
         <div className="tp-process-area pt-115 pb-110">
            <div className="container">
                <div className="row text-center">
                    <div className="col-xl-12">
                    <div className="tp-section-box tp-section-box-2 p-relative mb-50">
                        <span className="tp-section-subtitle d-inline-block pre mb-10">process</span>
                        <h2 className="tp-section-title">
                            How We Work
                        </h2>
                    </div>
                    </div>
                </div>
                <div className="row counter-row">
                    {process_data.map((item, i) => 
                        <div key={i} className="col-xl-2 col-lg-4 col-md-4">
                            <div className="tp-process-item-2 text-center mb-30">
                                <div className="counter-content"></div>
                                <h5>{item.title}</h5>
                                <i className={item.icon}></i>
                            </div>
                        </div>
                    )} 
                </div>
                <div className="process-bottom-text text-center">
                    <h3 className="tp-pro-text mt-50 mb-35">Providing Smart Mobility For The Smart Generation.</h3>
                    <div className="process-btn">
                    <Link className="tp-btn" href="/service">Our Services <i className="fal fa-long-arrow-right"></i></Link>
                    <Link className="tp-black-btn-2" href="/contact">Get A Quote</Link>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default ProcessArea;
