import ContactForm from '@/src/forms/contact-form';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <div className="contact-page pt-115 pb-115">
                <div className="container">
                <div className="contact-bg grey-bg">
                    <div className="row" style={{ alignItems: "stretch" }}>
                        <div className="col-xxl-6 col-xl-7 col-lg-6">
                            <div className="contact-map" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <iframe 
                                src="https://www.google.com/maps?q=24.375001,54.519753&z=17&output=embed"
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" 
                                style={{ width: "100%", height: "100%", border: 0, borderRadius: "8px", flex: 1 }}
                                title="One Mobility Group - 9GG9+5P3 Musaffah M2 Abu Dhabi">
                            </iframe>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-5 col-lg-6">
                        <div className="contact-us">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">contact us</span>
                                <h2 className="tp-section-title mb-35">
                                    Get In Touch
                                </h2>
                            </div>
                            <div className="contact">
                                <div className="contact__form">
                                    <ContactForm /> 
                                    <p className="ajax-response"></p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    );
};

export default ContactArea;