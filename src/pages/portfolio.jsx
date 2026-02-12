import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Portfolio from "../components/portfolio";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Portfolio" pageDescription="Company portfolio: projects and case studies in transport, fleet operations, and mobility solutions from One Mobility Group." />
      <Portfolio />
    </Wrapper>
  );
};

export default index;
