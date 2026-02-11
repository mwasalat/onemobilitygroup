import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react"; 
import AboutArea from "./about-area";
import ServiceArea from "./service-area";
import FeatureArea from "./feature-area";
import Footer from "@/src/layout/footers/footer";

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb  title="About"  innertitle="About One Mobility Group"  />
      <AboutArea />
      <ServiceArea />
      <FeatureArea />
      <Footer />
    </>
  );
};

export default About; 
