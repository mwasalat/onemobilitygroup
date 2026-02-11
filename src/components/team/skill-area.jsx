import React from 'react';

const SkillArea = () => {
    return (
        <>
           <div className="tp-team-progress-area  grey-bg p-relative pt-115 pb-90">
                <div className="tp-progress-overlay d-none d-lg-block" style={{backgroundImage: `url(/assets/img/team/progress-2.jpg)`}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                        <div className="tp-skil-wrap mb-30">
                            <div className="tp-section-box tp-section-box-2 mb-40 p-relative">
                                <span className="tp-section-subtitle right d-inline-block">skillset</span>
                                <h2 className="tp-section-title mb-20">
                                    Expertise In Transportation & Mobility
                                </h2>
                                <p>One Mobility Group has extensive knowledge and experience in the field of mobility. Our team includes experts in transportation, engineering, and technology, constantly working to improve and innovate our services.</p>
                            </div>
                            <div className="team__skill-progress-item mb-30 p-relative">
                                <h4 className="mb-20">Customer Satisfaction</h4>
                                <span className="progress-count">95%</span>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  
                                    style={{width: "95%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}
                                    >
                                    </div>
                                </div>
                            </div>
                            <div className="team__skill-progress-item p-relative">
                                <h4 className="mb-20">Fleet Maintenance</h4>
                                <span className="progress-count">90%</span>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s" data-wow-delay=".3s" role="progressbar" data-width="90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  
                                    style={{width: "90%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                        <div className="tp-progres-img text-start text-lg-end mb-30">
                            <img src="/assets/img/team/progress-1.jpg" alt="One Mobility" />
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default SkillArea;
