import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import MissionVision from "../components/mission-vision";

const MissionVisionPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Mission & Vision"
        pageDescription="Our mission: best-in-class mobility services and user experience for smarter cities. Our vision: premier mobility service providers worldwide, setting benchmarks in innovation and sustainability."
      />
      <MissionVision />
    </Wrapper>
  );
};

export default MissionVisionPage;
