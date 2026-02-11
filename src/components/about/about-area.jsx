import React from 'react';


const about_content = {
    img: "/assets/img/onemobility-assets/ab-hm-4.jpg",
    title: <>Trusted Experience <br /> Over</>,
    year_count: "26+",
    year: "Years",
    about: "About Us",
    about_title: "Enhancing Mass Transit For Smarter Cities",
    post_img: "/assets/img/onemobility-assets/ab-sm-4-4.jpg",
    post : <>One Mobility Group provides reliable, affordable, and sustainable transportation solutions that improve city inhabitants' daily lives.</>,
    author: <><b>One Mobility Group</b> <i>- Smarter Cities Worldwide</i></>,
    fetoure_1: "Innovation & technology driven solutions",
    fetoure_2: "Environmental responsibility & ESG commitment",
}  
const {img, title, year_count, year, about, about_title, post_img, post, author, fetoure_1, fetoure_2}  = about_content


const AboutArea = () => {
    return (
        <>
           <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                        <div className="ab-wrapper-4 p-relative">
                            <div className="ab-right-img">
                                <img src={img} alt="One Mobility Group" />
                            </div>
                            <div className="tp-ab-left-meta">
                                <h3>{title}</h3>
                                <h4>{year_count}</h4>
                                <h5>{year}</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                        <div className="tp-about-info-wrapper pl-50">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{about}</span>
                                <h2 className="tp-section-title mb-15">
                                   {about_title}
                                </h2>
                            </div>
                            <hr className="mt-25 mb-30" />
                            <div className="tp-ab-meta">
                                <div className="about-meta-img d-flex">
                                    <img src={post_img} alt="One Mobility" />
                                    <div className="tp-ab-meta-text pl-30">
                                    <h4>{post}</h4>
                                    <span>{author}</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-30 mb-35" />
                            <div className="tp-ab-4-list">
                                <div className="tp-about-fea-item">
                                    <ul>
                                    <li><i className="fal fa-check"></i>{fetoure_1}</li>
                                    <li><i className="fal fa-check"></i>{fetoure_2}</li>
                                    </ul>
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

export default AboutArea;
