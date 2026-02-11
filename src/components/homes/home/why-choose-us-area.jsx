import React from "react";

const why_choose_data = [
  {
    id: 1,
    number: "01",
    title: "Innovation & Technology",
    description:
      "We utilize the latest technologies to make our services more convenient, accessible, and environmentally responsible.",
  },
  {
    id: 2,
    number: "02",
    title: "Expertise & Experience",
    description:
      "Our team includes experts in transportation, engineering, and technology, dedicated to continuous improvement and innovation.",
  },
  {
    id: 3,
    number: "03",
    title: "Commitment To Excellence",
    description:
      "We are committed to delivering the highest level of service and setting benchmarks in the field of mobility.",
  },
];

const WhyChooseUsArea = () => {
  return (
    <>
      <div className="tp-feature-area p-relative">
        <div
          className="fea-bg"
          style={{ backgroundImage: `url(/assets/img/onemobility-assets/fea-bg.jpg)` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-fea-box pt-120 pb-90 pr-70">
                <div className="tp-section-box p-relative mb-40">
                  <span className="tp-section-subtitle d-inline-block mb-10">
                    Why Choose Us
                  </span>
                  <h2 className="tp-section-title mb-20">
                    Best-In-Class Mobility Services &amp; User Experience
                  </h2>
                  <p>
                    We leverage technology, intellectual resources, and a strong
                    infrastructure to deliver reliable, affordable, and
                    sustainable transportation solutions for smarter cities.
                  </p>
                </div>
                <div className="tp-fea-list-wrapper">
                  <ul>
                    {why_choose_data.map((item, i) => (
                      <li key={i} style={{ marginBottom: "30px" }}>
                        <div className="d-flex align-items-start">
                          <div
                            style={{
                              minWidth: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              border: "2px solid #2da0a8",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "20px",
                              color: "#2da0a8",
                              fontWeight: "700",
                              fontSize: "16px",
                            }}
                          >
                            {item.number}
                          </div>
                          <div>
                            <h4
                              style={{
                                fontWeight: "700",
                                marginBottom: "8px",
                                fontSize: "18px",
                              }}
                            >
                              {item.title}
                            </h4>
                            <p style={{ marginBottom: 0 }}>{item.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsArea;
