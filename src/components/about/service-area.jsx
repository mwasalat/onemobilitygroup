import React from 'react';


const service_data = [
    { id: 1, icon: "fas fa-car", title: "Premier Auto Rental", description: "20+ vehicle categories, daily to long-term leases, fleet management." },
    { id: 2, icon: "fas fa-taxi", title: "Taxi Services", description: "Reliable taxi network, 2000+ vehicles, 24/7." },
    { id: 3, icon: "fas fa-bus", title: "Public & School Transport", description: "600+ ITS buses, 350+ school buses across regions." },
    { id: 4, icon: "fas fa-tools", title: "Service Center", description: "Full mechanical and body shop repairs since 1997." },
]

const ServiceArea = () => {
    return (
        <>
            <div className="tp-process-area grey-bg pt-115 pb-90 ">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block pre mb-10">Services</span>
                            <h2 className="tp-section-title">
                                What We Provide
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="row counter-row">
                        {service_data.map((item, i)  => 
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-30">
                                <div className="tpprocess-hm-4 p-relative" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                    <div style={{ fontSize: "48px", fontWeight: "700", color: "#3c8599", lineHeight: "1", marginBottom: "16px", minWidth: "48px" }}>
                                        {(i + 1).toString().padStart(2, '0')}
                                    </div>
                                    <span className="flaticon-secure"><i className={item.icon}></i></span>
                                    <div className="tp-process-contnt-4" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                        <h6 style={{ marginBottom: "12px" }}>{item.title}</h6>
                                        <p className="m-0" style={{ flex: 1, fontSize: "14px" }}>{item.description}</p>
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

export default ServiceArea;