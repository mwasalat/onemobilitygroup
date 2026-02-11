import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <div className="tp-about-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="tp-about-wapper p-relative">
                <div className="tp-about-thumb p-relative pt-60 mb-40">
                  <img
                    className="ab-sm"
                    src="/assets/img/onemobility-assets/190-190.jpg"
                    alt="One Mobility"
                  />
                  <img
                    className="ab-lg ml-80"
                    src="/assets/img/onemobility-assets/one-mobility-group-420-500.jpg"
                    alt="One Mobility"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-about-wrapper pt-50 pl-35 mb-40">
                <div className="tp-section-box p-relative">
                  <span className="tp-section-subtitle d-inline-block mb-10">
                    Genesis About Us
                  </span>
                  <h2 className="tp-section-title mb-30">
                    We Are Committed To Innovation, Customer Service &amp;
                    Environmental Responsibility
                  </h2>
                  <p>
                    One Mobility Group is a group of companies that precisely
                    enhances mass transit approachability, efficiency, and
                    convenience for smarter cities worldwide. We provide
                    reliable, affordable, and sustainable transportation
                    solutions that improve city inhabitants&apos; daily lives.
                  </p>
                </div>
                <hr className="mt-25 mb-30" />
                <div className="tp-ab-meta">
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="d-flex align-items-start">
                        <div className="mr-15" style={{ minWidth: "30px" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ color: "#2da0a8", fontSize: "24px" }}
                          ></i>
                        </div>
                        <div>
                          <h5 style={{ fontWeight: "700", marginBottom: "5px" }}>
                            Wide Range Of Services
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <p style={{ borderLeft: "3px solid #2da0a8", paddingLeft: "15px" }}>
                        Auto rental, taxi, public &amp; school transport,
                        insurance, trading, service center &amp; technology.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="d-flex align-items-start">
                        <div className="mr-15" style={{ minWidth: "30px" }}>
                          <i
                            className="fas fa-check-circle"
                            style={{ color: "#2da0a8", fontSize: "24px" }}
                          ></i>
                        </div>
                        <div>
                          <h5 style={{ fontWeight: "700", marginBottom: "5px" }}>
                            Expert Team &amp; Know-How
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <p style={{ borderLeft: "3px solid #2da0a8", paddingLeft: "15px" }}>
                        Experts in transportation &amp; technology delivering
                        the highest level of service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-20">
                  <Link href="/about" className="tp-btn">
                    Discover More <i className="fal fa-long-arrow-right"></i>
                  </Link>
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
