import React from "react";

const MissionVisionArea = () => {
  return (
    <>
      <div id="mission-vision" className="pt-120 pb-90" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className="tp-section-box p-relative mb-60">
                <span
                  className="tp-section-subtitle d-inline-block mb-10"
                  style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                >
                  Who We Are
                </span>
                <h2 className="tp-section-title">Mission &amp; Vision</h2>
                <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                  Driving the future of urban mobility with innovation,
                  sustainability, and excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                style={{
                  background: "linear-gradient(135deg, #2da0a8 0%, #5cc8d0 100%)",
                  borderRadius: "15px",
                  padding: "40px 35px",
                  marginBottom: "30px",
                  minHeight: "280px",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <i
                    className="fas fa-bullseye"
                    style={{ fontSize: "28px", color: "#fff" }}
                  ></i>
                </div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Our Mission
                </h3>
                <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: "1.8" }}>
                  To provide best-in-class mobility services and user experience
                  to customers by leveraging technology, intellectual resources,
                  and a strong infrastructure to deliver reliable, affordable,
                  and sustainable transportation solutions for smarter cities.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "15px",
                  padding: "40px 35px",
                  marginBottom: "30px",
                  minHeight: "280px",
                  boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#2da0a8",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <i
                    className="flaticon-group"
                    style={{ fontSize: "28px", color: "#fff" }}
                  ></i>
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Our Vision
                </h3>
                <p style={{ lineHeight: "1.8" }}>
                  To be among the premier and best-known mobility service
                  providers in the global mobility landscape, setting
                  benchmarks in innovation, sustainability, and customer
                  satisfaction across all our operations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVisionArea;
