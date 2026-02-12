import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import PortfolioDetails from "../components/portfolio-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Portfolio Details" pageDescription="Project details and outcomes from our fleet and mobility operations." />
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;
