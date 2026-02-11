import service_data from '@/src/data/service-data';
import React from 'react';

const ServiceArea = () => {
    return (
        <>
           <div className="service-area pt-120 pb-90">
                <div className="container">
                    <div className="row text-center mb-60">
                        <div className="col-12">
                            <div className="tp-section-box tp-section-box-2 p-relative">
                                <span className="tp-section-subtitle d-inline-block pre mb-10">What We Offer</span>
                                <h2 className="tp-section-title">Our Core Services</h2>
                                <p style={{ maxWidth: "600px", margin: "15px auto 0" }}>
                                    Delivering reliable, affordable, and sustainable transportation solutions for smarter cities worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {service_data.slice(10, 16).map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6 mb-30">
                                <div className="tp-service-card" style={{
                                    background: "#fff",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <div style={{ 
                                        position: "relative", 
                                        overflow: "hidden", 
                                        height: "220px" 
                                    }}>
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            style={{ 
                                                width: "100%", 
                                                height: "100%", 
                                                objectFit: "cover",
                                                transition: "transform 0.4s",
                                            }} 
                                        />
                                        <div style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "80px",
                                            background: "linear-gradient(transparent, rgba(0,31,63,0.7))",
                                        }}></div>
                                        <div style={{
                                            position: "absolute",
                                            bottom: "16px",
                                            left: "20px",
                                            width: "48px",
                                            height: "48px",
                                            background: "#3c8599",
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}>
                                            <i className={item.icon} style={{ color: "#fff", fontSize: "20px" }}></i>
                                        </div>
                                    </div>
                                    <div style={{ 
                                        padding: "24px 24px 28px", 
                                        flex: 1, 
                                        display: "flex", 
                                        flexDirection: "column" 
                                    }}>
                                        <h3 style={{ 
                                            fontSize: "20px", 
                                            fontWeight: "700", 
                                            marginBottom: "12px",
                                            color: "#001f3f",
                                        }}>{item.title}</h3>
                                        <p style={{ 
                                            fontSize: "14px", 
                                            color: "#666", 
                                            lineHeight: "1.7", 
                                            margin: 0, 
                                            flex: 1 
                                        }}>{item.description}</p>
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