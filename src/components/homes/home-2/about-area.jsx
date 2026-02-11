import Link from 'next/link';
import React from 'react';


const about_content = {
    about: "About Us",
    title:"Best-In-Class Mobility Services & Solutions",
    info: <>One Mobility Group is a group of companies that precisely enhances mass transit approachability, efficiency, and convenience for smarter cities worldwide. We provide reliable, affordable, and sustainable transportation solutions that improve city inhabitants' daily lives.</>,
    features: [
        "Premier Auto Rental Services",
        "Taxi & Public Transport",
        "School Transportation",
        "Service Center & Technology",
        "Automobile Trading",
        "Service Center & Technology", 
    ],
    sig_img: "/assets/img/about/sig.png",
    author: "One Mobility",
    job_title: "Group CEO",
    right_img: "/assets/img/about/about-bg.jpg"
}
const {about, title, info, features, sig_img, author, job_title, right_img} = about_content

const AboutArea = () => {
    return (
        <>
           <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                        <div className="tp-about-wrapper tp-about-wrapper-2 pt-40 mb-40 pr-40">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{about}</span>
                                <h2 className="tp-section-title mb-15">
                                    {title}
                                </h2>
                                <p>{info}</p>
                            </div>
                            <hr className="mt-30 mb-30" />
                            <div className="tp-about-fea-item">
                                <ul>
                                    {features.map((feature , i) => <li key={i}><i className="fal fa-check"></i>{feature}</li>)} 
                                </ul> 
                            </div>
                            <div className="tp-about-fea-signature d-flex align-items-center mt-25">
                                <div className="sig-btn mr-30 mb-10">
                                    <Link className="tp-btn-border" href="/about">Learn More <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                                <div className="about-signature mb-10">
                                    <img src={sig_img} alt={author} />
                                    <h6>{author}, <span>{job_title}</span></h6>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                        <div className="tp-about-wapper2 pl-10">
                            <img src={right_img} alt="One Mobility Group" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutArea;
