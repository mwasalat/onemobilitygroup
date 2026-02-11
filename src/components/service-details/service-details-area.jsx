import CallToAction from '@/src/forms/call-to-action';
import React from 'react';


const service_details_content = {
    img: "/assets/img/services/Leading-In-Technology 1.png",
    title: "Service Overview",
    info_1: <>One Mobility Group is a group of companies that precisely enhances mass transit approachability, efficiency, and convenience for smarter cities worldwide. We provide reliable, affordable, and sustainable transportation solutions that improve city inhabitants' daily lives.</>,
    info_2: <>At One Mobility Group, we are committed to innovation, customer service, and environmental responsibility. Today, we offer a wide range of transportation services. We are focused on utilizing the latest technologies to make our services more convenient and accessible and to reduce our environmental impact. Our team is made up of experts in the field of transportation, and we are dedicated to delivering the highest level of service to our customers.</>,

    // over-veiw-list
    over_veiw_list: [
        {id: 1, icon: "fas fa-car", title: "Auto Rental Services"},
        {id: 2, icon: "fas fa-taxi", title: "Taxi Services"},
        {id: 3, icon: "fas fa-bus", title: "Public Transport"},
        {id: 4, icon: "fas fa-shuttle-van", title: "School Transport"},
        {id: 5, icon: "fas fa-microchip", title: "IoT & Connectivity"},
        {id: 6, icon: "fas fa-tools", title: "Service Center"},
    ],
    
    overview: <>Our mission is to provide best-in-class mobility services and user experience to customers by leveraging technology, intellectual resources, and a fabulous infrastructure. Our vision is to be among the premier and best-known mobility service providers in the global mobility landscape.</>,

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
    bottom_info: <>At One Mobility, we believe that being a responsible and sustainable company is not only the right thing to do but is also vital to our success. We are committed to aligning our business practices with Environmental, Social, and Governance (ESG) principles, in order to leave a positive impact on the world. Our public transport services aim to reduce traffic congestion and carbon emissions, promoting sustainable transportation.</>,

    service: [
        {id:1, icon: "fas fa-car" , title: "Premier Auto Rental"},
        {id:2, icon: "fas fa-taxi" , title: "Taxi Services"},
        {id:3, icon: "fas fa-bus" , title: "Public Transport"},
        {id:4, icon: "fas fa-shuttle-van" , title: "School Transport"},
        {id:5, icon: "fas fa-microchip" , title: "IoT & Connectivity"}, 
        {id:6, icon: "fas fa-exchange-alt" , title: "Automobile Trading"},
        {id:7, icon: "fas fa-tools" , title: "Service Center"},
        {id:8, icon: "fas fa-microchip" , title: "Technology Solutions"},
    ],

    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Service Details"},
        {id: 3, icon: "fas fa-file-prescription", title: "Fleet Information"},
    ]
}
const {img , title, info_1, info_2, over_veiw_list, overview, overview_features, bottom_info_title, bottom_info, service , materials}  = service_details_content


const ServiceDetailsArea = () => {
    return (
        <>
            <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20">
                            <img className="w-100" src={img} alt="One Mobility Services" />
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{info_1}</p>
                                    <p>{info_2}</p>
                                <div className="row over-veiw-list counter-row">
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
                                                        {item.features?.map((feature, index) => 
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
                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Services</h4>
                            <div className="tp-widget-item">
                                <ul>
                                    {service.map((item, i) => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i>{item.title}</span></a>
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
                                    {materials.map((item , i) => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i>{item.title}</span></a>
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

export default ServiceDetailsArea;
