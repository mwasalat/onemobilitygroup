import Link from 'next/link';
import React from 'react';

const pricing_data = [
    {
        id: 1, 
        active_cls: "",
        sirial: "01",
        title: "Daily Rental",
        price: "Contact Us",
        info: <>Flexible daily vehicle rental across 20+ categories for individuals and businesses.</>,
        features: [
            "Wide range of vehicle categories",
            "Latest model vehicles available",
            "Competitive transparent pricing",
            "24/7 customer support",
        ]
    },
    {
        id: 2, 
        active_cls: "active-2",
        sirial: "02",
        title: "Monthly Lease",
        price: "Contact Us",
        info: <>Cost-effective monthly leasing with customized fleet management solutions.</>,
        features: [
            "Wide range of vehicle categories",
            "Latest model vehicles available",
            "Customized fleet management",
            "Oil & Gas project management",
        ]
    },
    {
        id: 3, 
        active_cls: "",
        sirial: "03",
        title: "Long-Term Lease",
        price: "Contact Us",
        info: <>Comprehensive long-term leasing with full maintenance and fleet management included.</>,
        features: [
            "Wide range of vehicle categories",
            "Latest model vehicles available",
            "Customized fleet management",
            "Oil & Gas project management",
        ]
    },
]

const PricingArea = () => {
    return (
        <>
            <div className="pricing-area pb-90">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block pre mb-10">pricing</span>
                            <h2 className="tp-section-title">
                                Rental Plans
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        {pricing_data.map((item, i) => 
                             <div key={i} className="col-lg-4 col-md-6">
                                <div className={`tp-price tp-price-service ${item.active_cls} mb-30`}>
                                    {item.active_cls && <div className="tp-price-badge">
                                            <span>Best Value For Business</span>
                                        </div>                                    
                                    }
                                    <div   className="tp-price-head p-relative">
                                        <div className="tp-price-bg-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                        <div className="tp-price-content">
                                            <h6>{item.title}</h6>
                                            <h3 className="tp-price-value">{item.price}</h3>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                    <div className="tp-price-feature">
                                        <ul>
                                            {item.features?.map((feature, index) =>  <li key={index}><i className="fal fa-check"></i>{feature}</li>)} 
                                        </ul>
                                    </div>
                                    <div className="tp-price-btn">
                                        <Link href="/contact" className={`${item.active_cls ? "tp-btn" : "tp-white-btn"} w-100`}>Get A Quote <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                                </div>   
                        )} 

                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingArea;
