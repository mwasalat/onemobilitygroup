import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const portfolio_content = {
    top_img: "/assets/img/portfolio/portfolio-details-bg.jpg",
    title: "Project Overview",

    des_1: <>One Mobility Group provides comprehensive mobility solutions across multiple regions. Our fleet operations encompass auto rental, taxi services, public and school transport, covering thousands of routes and serving millions of passengers annually.</>,
    des_2: <>With over 26 years of experience in the transportation sector, One Mobility Group has built a reputation for excellence, innovation, and customer-centric service delivery. Our operations are powered by cutting-edge technology including IoT, AI, predictive maintenance, and intelligent transport systems.</>,
    avata: "/assets/img/portfolio/portfolio-details.png",
    info: <>One Mobility Group is committed to providing best-in-class mobility services and delivering sustainable value for all stakeholders.</>,
    name: "One Mobility Group",
    job_title: "Global",



    // over-veiw-list
    over_veiw_list: [
        {id: 1, icon: "fas fa-car", title: "Auto Rental"},
        {id: 2, icon: "fas fa-taxi", title: "Taxi Services"},
        {id: 3, icon: "fas fa-bus", title: "Public Transport"},
        {id: 4, icon: "fas fa-shuttle-van", title: "School Transport"},
        {id: 5, icon: "fas fa-microchip", title: "IoT & Connectivity"},
        {id: 6, icon: "fas fa-tools", title: "Service Center"},
    ],
    overview: <>Our mission is to provide best-in-class mobility services and user experience to customers by leveraging technology, intellectual resources, and a fabulous infrastructure to deliver reliable, affordable, and sustainable transportation solutions for smarter cities.</>,

    overview_features: [
        {
            id: 1, 
            features: [
                "20+ vehicle categories for daily, monthly, and long-term leases",
                "2000+ taxi vehicles available 24/7 across multi-emirates",
                "600+ public transport buses with Intelligent Transport Systems", 
            ],
        },
        {
            id: 2, 
            features: [
                "350+ school buses with latest safety features and trained staff",
                "IoT connectivity and remote fleet monitoring",
                "Fully-fledged service center operational since 1997", 
            ],
        },
    ],

    bottom_info_title: "Our Commitment to Sustainability",
    bottom_info: <>At One Mobility, we believe that being a responsible and sustainable company is not only the right thing to do but is also vital to our success. We are committed to aligning our business practices with Environmental, Social, and Governance (ESG) principles, aiming to reduce traffic congestion and carbon emissions through our public transport services.</>,

    product_details: [
        {id: 1, info: "Category :", details: "Transportation, Mobility"},
        {id: 2, info: "Client :", details: "One Mobility Group"},
        {id: 3, info: "Location :", details: "Multiple Regions"},
        {id: 4, info: "Fleet :", details: "3000+ Vehicles"},
    ],

    service: [
        {id:1, icon: "fas fa-car" , title: "Premier Auto Rental"},
        {id:2, icon: "fas fa-taxi" , title: "Taxi Services"},
        {id:3, icon: "fas fa-bus" , title: "Public Transport"},
        {id:4, icon: "fas fa-shuttle-van" , title: "School Transport"},
        {id:5, icon: "fas fa-tools" , title: "Service Center"}, 
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Fleet Information"},
        {id: 3, icon: "fas fa-file-prescription", title: "Service Brochure"},
    ]

}
const {top_img, title, des_1, des_2, avata, info, name, job_title, over_veiw_list, overview, overview_features, bottom_info, bottom_info_title, product_details, service, materials} = portfolio_content


const PortfolioDetailsArea = () => {
    return (
        <>
           <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20">
                            <img className="w-100" src={top_img} alt="One Mobility" />
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{des_1}</p>
                                <p>{des_2}</p>
                                
                                <div className="overveiw-testimonial text-center">
                                    <div className="portfolio-details-content">
                                    <img src={avata} alt="One Mobility" />
                                    <p>{info}</p>
                                    <h5>{name}</h5>
                                    <h6>{job_title}</h6>
                                    </div>
                                    <div className="testi-overview-icon">
                                    <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>

                                <div className="row over-veiw-list counter-row">
                                    <h4>Our Services</h4>
                                    {over_veiw_list.map((item, i) => 
                                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="tp-over-view-item mb-30">
                                                <div className="over-veiw-counter"></div>
                                                <i className={item.icon}></i>
                                                <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    )} 
                                </div>

                                <div className="tp-overview-fea-list">
                                    <p>{overview}</p>
                                    <div className="row">
                                        {overview_features.map((item, i) => 
                                            <div key={i} className="col-xl-6">
                                                <div className="tp-overview-feature">
                                                    <ul>
                                                        {item.features?.map((feature, index)  => 
                                                            <li key={index}>
                                                                <i className="fal fa-check"></i>
                                                                 {feature}
                                                            </li>                                                        
                                                        )} 
                                                    </ul>
                                                </div>
                                            </div>
                                        )} 
                                    </div>
                                    <div className="tp-bottom-info pt-20">
                                    <h4>{bottom_info_title}</h4>
                                    <p>{bottom_info}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="col-xl-3">

                        <div className="tp-sidebar-widget mb-50">
                            <div className="tp-widget-category">
                                <h4 className="tp-widget-title">Project Details</h4>
                                <ul> 
                                    {product_details.map((item, i) => 
                                        <li key={i}><a href="#"><span>{item.info}</span> {item.details}</a></li>
                                    )} 
                                </ul>
                            </div>
                        </div>

                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Services</h4>
                            <div className="tp-widget-item">
                                <ul>
                                  {service.map((item, i) => <li key={i}>
                                    <a href="#"><span><i className={item.icon}></i> {item.title}</span></a>
                                    </li> 
                                  )} 
                                </ul>
                            </div>
                        </div>

                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Call To Action</h4>
                            <div className="widget-form grey-bg">
                                <CallToAction /> 
                            </div>
                        </div>

                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Our Materials</h4>
                            <div className="tp-widget-item-2">
                                <ul>
                                    {materials.map((item, i)  => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i> {item.title}</span></a>
                                        </li>
                                    )} 
                                </ul>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default PortfolioDetailsArea;
