import Link from "next/link";
import React from "react";

const gceo_content = {
  img: "/assets/img/team/gceo_message.jpg",
  subtitle: "Group CEO",
  name: "GCEO Message",
  paragraphs: [
    `Welcome to One Mobility Group. As the Group CEO, I am proud to lead a company that is dedicated to transforming urban mobility and enhancing the daily lives of millions of people across the globe.`,
    `One Mobility Group is a group of companies that precisely enhances mass transit approachability, efficiency, and convenience for smarter cities worldwide. We provide reliable, affordable, and sustainable transportation solutions that improve city inhabitants' daily lives.`,
    `Our wide range of services spans auto rental, taxi, public & school transport, insurance, trading, service center & technology. With over 26 years of experience, we have built a reputation for excellence, innovation, and customer-centric service delivery.`,
    `We leverage technology, intellectual resources, and a strong infrastructure to deliver reliable, affordable, and sustainable transportation solutions for smarter cities. Our team includes experts in transportation, engineering, and technology, dedicated to continuous improvement and innovation.`,
    `Our vision is to be among the premier and best-known mobility service providers in the global mobility landscape, and our mission is to provide best-in-class mobility services and user experience to our customers. We are committed to delivering the highest level of service and setting benchmarks in the field of mobility.`,
    `Thank you for your trust and partnership. Together, we are shaping the future of transportation.`,
  ],
};

const { img, subtitle, name, paragraphs } = gceo_content;

const GceoMessageArea = () => {
  return (
    <>
      <div className="team-details-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="team-member">
                <img
                  src={img}
                  alt="GCEO"
                  style={{ borderRadius: "10px", width: "100%" }}
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="team-member-info pt-20">
                <div className="tp-section-box tp-section-box-2 mb-30 p-relative">
                  <span className="tp-section-subtitle right d-inline-block">
                    {subtitle}
                  </span>
                  <h2 className="tp-section-title mb-20">{name}</h2>
                </div>
                {paragraphs.map((para, i) => (
                  <p key={i} style={{ marginBottom: "15px", lineHeight: "1.8" }}>
                    {para}
                  </p>
                ))}
                <Link className="tp-btn mt-15" href="/contact">
                  Contact Us
                  <i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GceoMessageArea;
