import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home" pageDescription="Driving the future of urban mobility. Reliable, affordable, sustainable transportation and mobility solutions worldwide." />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
