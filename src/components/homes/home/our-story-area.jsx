import Link from "next/link";
import React, { useState } from "react";
import VideoPopup from "@/src/modals/video-popup";

const OurStoryArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div style={{ background: "#f0f0f0" }}>
        {/* Text Section */}
        <div className="pt-100 pb-50">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <div className="tp-section-box p-relative mb-30">
                  <span className="tp-section-subtitle d-inline-block mb-10">
                    Our Story
                  </span>
                  <h2 className="tp-section-title mb-30">
                    Shaping The Future Of Transportation
                  </h2>
                </div>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/contact" className="tp-btn">
                    Contact Us <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  style={{
                    position: "relative",
                    borderRadius: "15px",
                    overflow: "hidden",
                    height: "450px",
                    backgroundImage: `url(/assets/img/onemobility-assets/banner-1920x-810.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "#2da0a8",
                        border: "none",
                        color: "#fff",
                        fontSize: "24px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 30px rgba(45,160,168,0.5)",
                      }}
                    >
                      <i className="fas fa-play" style={{ marginLeft: "4px" }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"G9RhQdMfMU8"}
      />
    </>
  );
};

export default OurStoryArea;
