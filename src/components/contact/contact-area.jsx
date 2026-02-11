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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.5!2d54.4967!3d24.3536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41c0a4d3f4b1%3A0x9GF9VVF!2s9GF9%2BVVF+-+2+-+Musaffah+-+M2+-+Abu+Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae&q=9GF9%2BVVF+Musaffah+M2+Abu+Dhabi" 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" 
                                style={{ width: "100%", height: "100%", border: 0, borderRadius: "8px", flex: 1 }}
                                title="One Mobility Group Corporate Office">
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