import Link from 'next/link';
import React from 'react';



const service_content = {
   service_data : [
      {
         id: 1,
         tab_id:"nav-camera",
         active: "show active",
         aria_labelledby: "nav-camera-tab",
         img: "/assets/img/services/Premier-Auto-Rental-&-Fleet-Solutions.png",
         price: "",
         title: "Premier Auto Rental",
         description: <>A wide range of vehicles available in more than 20+ categories for daily rentals along with monthly and long-term leases. From hatchbacks, sedans, SUVs, 4x4s, and premium cars, we also offer buses and commercial vehicles for businesses and schools.</>,
         fetures: [
            "20+ vehicle categories",
            "Customized fleet management",
            "Latest vehicle models",
            "Highest safety standards",
            "Oil & Gas fleet solutions",
         ]
      },
      {
         id: 2,
         tab_id:"nav-taxi",
         active: "",
         aria_labelledby: "nav-taxi-tab",
         img: "/assets/img/services/Safe-&-Reliable-Taxi-Services.png",
         price: "",
         title: "Taxi Services",
         description: <>Our taxi service offers convenient and reliable transportation with 2000+ vehicles, all clean, comfortable, and well-maintained. Our drivers are experienced, professional, and trained to provide excellent customer service. Available 24/7 across multiple cities.</>,
         fetures: [
            "2000+ vehicle fleet",
            "24/7 availability",
            "Experienced professional drivers",
            "Competitive transparent rates",
            "Multi-emirates coverage",
         ]
      },
      {
         id: 3,
         tab_id:"nav-transport",
         active: "",
         aria_labelledby: "nav-transport-tab",
         img: "/assets/img/services/School-Transportation-Services.png",
         price: "",
         title: "Public & School Transport",
         description: <>Public transportation bus service available in major capital cities. 600+ buses equipped with Intelligent Transport Systems. 350+ school buses with latest safety features, experienced drivers, and trained nannies who undergo regular training.</>,
         fetures: [
            "600+ buses nationwide",
            "400+ buses in Egypt",
            "350+ school buses",
            "Intelligent Transport Systems",
            "Wheelchair accessibility",
         ]
      },
      {
         id: 4,
         tab_id:"nav-more",
         active: "",
         aria_labelledby: "nav-more-tab",
         img: "/assets/img/services/Car-Service 1.png",
         price: "",
         title: "Service Center & More",
         description: <>Fully-fledged workshops operational since 1997 capable of any mechanical and body shop repairs. Plus automobile trading across Africa, CIS, Russia, China, and Far East, and cutting-edge technology solutions for fleet management.</>,
         fetures: [
            "Service center since 1997",
            "Technology solutions",
            "Automobile trading globally",
            "IoT & AI technology",
            "Predictive maintenance",
         ]
      },
   ]
} 
const {service_data}  = service_content


const ServiceArea = () => {
    return (
        <>
   <div className="service-area">
      <div className="service-tab-bg pt-115" style={{backgroundImage: `url(/assets/img/services/tab-bg.jpg)`}}>
         <div className="container">
               <div className="tp-section-box tp-section-box-2 p-relative mb-45 text-center">
                  <span className="tp-section-subtitle d-inline-block pre mb-10">services</span>
                  <h2 className="tp-section-title">
                     What We Provide
                  </h2>
               </div>
               <div className="service-tab-info">
                  <nav>
                     <div className="nav tp-service-tab justify-content-center mb-35" id="nav-tab" role="tablist">
                        <button className="nav-links active" id="nav-camera-tab" data-bs-toggle="tab" data-bs-target="#nav-camera"
                           type="button" role="tab" aria-controls="nav-camera" aria-selected="false">Auto Rental</button>

                        <button className="nav-links" id="nav-taxi-tab" data-bs-toggle="tab" data-bs-target="#nav-taxi"
                           type="button" role="tab" aria-controls="nav-taxi" aria-selected="false">Taxi Services</button>

                        <button className="nav-links" id="nav-transport-tab" data-bs-toggle="tab" data-bs-target="#nav-transport"
                           type="button" role="tab" aria-controls="nav-transport" aria-selected="false">Public & School Transport</button>

                        <button className="nav-links" id="nav-more-tab" data-bs-toggle="tab" data-bs-target="#nav-more"
                           type="button" role="tab" aria-controls="nav-more" aria-selected="false">Service Center & More</button>
                     </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                     {service_data.map((item, i)  => 
                        <div key={i} className={`tab-pane fade ${item.active}`} id={item.tab_id} role="tabpanel" aria-labelledby={item.aria_labelledby}
                              tabIndex="0">
                              <div className="slider-tab-main white-bg">
                                 <div className="row">
                                    <div className="col-lg-5 col-12 sv-tab-img">
                                       <div className="tp-service-tab-img">
                                          <img src={item.img} alt="One Mobility" />
                                       </div>
                                    </div>
                                    <div className="col-lg-7 col-12 sv-tab-content">
                                       <div className="tp-service-tab-content pt-30 pl-25">
                                          <div className="tab-circle">
                                             {item.price && <h4><span>$</span>{item.price}</h4>}
                                             <h3 className="sv-tab-titile">{item.title}</h3>
                                             <p>{item.description}</p>
                                          </div>
                                          <div className="tp-sv-feature-list mb-40">
                                             <ul>
                                                {item.fetures.map((feture, index) => 
                                                   <li key={index}><i className="fal fa-check"></i>{feture}</li>                                                
                                                )} 
                                             </ul>
                                          </div>
                                          <div className="services-tab-btn">
                                             <Link href="/service" className="tp-btn">Read More</Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>                     
                     )} 

                  </div>
               </div>
         </div>
      </div>
   </div>
        </>
    );
};

export default ServiceArea;
