import NiceSelect from '@/src/ui/nice-select';
import Link from 'next/link';
import React from 'react';



const team_content = {
    contact_data: [
        {
            id: 1,
            link: "tel:Within24/7Hours", 
            icon: "fas fa-alarm-clock",
            subtitle: "Free Quote",
            title: "Within 24/7 Hours",
        },
        {
            id: 2,
            link: "tel:ServiceAvailable", 
            icon: "fas fa-calendar-alt",
            subtitle: "Same Day",
            title: "Service Available",
        },
        {
            id: 3,
            link: "mailto:info@onemobilitygroup.com", 
            icon: "far fa-envelope-open-text",
            subtitle: "Support Email",
            title: "info@onemobilitygroup.com",
        },
        {
            id: 4, 
            link: "tel:55589633333",
            icon: "fas fa-phone",
            subtitle: "Friendly Advice",
            title: "555 896 333 33",
        },
    ],
    subtitle: "get a quote",
    title: "Meet Our Best Solutions For Your Mobility Needs",
    btn_1: "Get Quote",
    btn_2: "Contact Us",
    info: <>Select your <span>vehicle type</span> and requirements, then click to get a customized quote.</>
}
const {contact_data, subtitle, title, btn_1, btn_2, info}  = team_content

const TeamArea = () => {
    const selectHandler = (e) => {};
    return (
        <>
        <div className="tp-quote-area pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 m-auto">
                    <div className="tp-section-box tp-section-box-2 p-relative text-center mb-45">
                        <span className="tp-section-subtitle d-inline-block pre mb-10">{subtitle}</span>
                        <h2 className="tp-section-title">{title}</h2>
                    </div>
                    </div>
                </div>
                <div className="select-main">
                    <div className="row">

                    <div className=" col-xl-4 col-lg-4 col-md-6">
                        <div className="select-item"> 
                                <NiceSelect 
                                    options={[
                                    { value: "Vehicle Type", text: "Vehicle Type" },
                                    { value: "Sedan", text: "Sedan" },
                                    { value: "SUV", text: "SUV" },
                                    { value: "Bus", text: "Bus" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    />  
                                    <NiceSelect 
                                    options={[
                                    { value: "Duration", text: "Duration" },
                                    { value: "Daily", text: "Daily" },
                                    { value: "Monthly", text: "Monthly" },
                                    { value: "Long-term", text: "Long-term" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    />   
                        </div>
                    </div>

                    <div className=" col-xl-4 col-lg-4 col-md-6">
                        <div className="select-item">
                                    <NiceSelect 
                                    options={[
                                    { value: "Service", text: "Service Type" },
                                    { value: "Auto Rental", text: "Auto Rental" },
                                    { value: "Taxi", text: "Taxi" },
                                    { value: "School Transport", text: "School Transport" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    />   
                                    <NiceSelect 
                                    options={[
                                    { value: "Location", text: "Location" },
                                    { value: "Abu Dhabi", text: "Abu Dhabi" },
                                    { value: "Dubai", text: "Dubai" },
                                    { value: "Sharjah", text: "Sharjah" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    />  
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="select-button">
                            <Link className="tp-btn w-100 mb-10" href="/contact">{btn_1}</Link>
                            <Link className="tp-black-btn-2 w-100" href="/contact">
                            {btn_2}
                                <i className="fal fa-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="select-text text-center pt-25 pb-25">
                    <p>{info}</p>
                    </div>
                </div>
                <div className="select-icon-main">
                    <div className="row">
                        {contact_data.map((item, i)  => 
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-header-contact-icon select-text-size d-flex align-items-center mb-20">
                                <div><a href="#"><i className={item.icon}></i></a></div>
                                <div className="tp-header-icon-info">
                                    <label>{item.subtitle}</label>
                                    <a href={item.link}> {item.title}</a>
                                </div>
                                </div>
                            </div>                
                        )} 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TeamArea;
