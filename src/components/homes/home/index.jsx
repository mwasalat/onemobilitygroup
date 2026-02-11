import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import SliderArea from "./slider-area";
import AboutArea from "./about-area";
import MissionVisionArea from "./mission-vision-area";
import WhyChooseUsArea from "./why-choose-us-area";
import OurStoryArea from "./our-story-area";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <SliderArea />
      <AboutArea />
      <MissionVisionArea />
      <WhyChooseUsArea />
      <OurStoryArea />
      <Footer />
    </>
  );
};

export default HomeOne;
