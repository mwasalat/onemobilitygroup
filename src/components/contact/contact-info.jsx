import React from 'react';

// contact info data
const contact_info_data = [
    {
        id: 2, 
        icon: "fas fa-envelope",
        title: "Email Address",
        info_1: "info@onemobilitygroup.com",
        info_2: "contact@onemobilitygroup.com",
        link_1: "mailto:info@onemobilitygroup.com",
        link_2: "mailto:contact@onemobilitygroup.com",
    },
    {
        id: 3, 
        icon: "fas fa-map-marker-alt",
        title: "Visit Us",
        info_1: "9GF9+VVF - 2 - Musaffah",
        info_2: "M2 - Abu Dhabi",
        link_1: "#",
        link_2: "#",
    },
    {
        id: 4, 
        icon: "fal fa-share-alt",
        title: "Social Connect",
        info_1: "Follow us on social media",
        info_2: "for latest updates",
        link_1: "#",
        link_2: "#",
    },

]

const ContactInfo = () => {
    return (
        <>
           <div className="tp-contact-info pb-90">
                <div className="container">
                    <div className="row contact-last-child justify-content-center">
                        {contact_info_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="contact-info-item text-center mb-30">
                                    <i className={item.icon}></i>
                                    <h5>{item.title}</h5>
                                    <a href={item.link_1}>{item.info_1}<br /></a>
                                    <a href={item.link_2}>{item.info_2}</a>
                                </div>
                             </div>
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default ContactInfo;