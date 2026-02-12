import React from "react";
import SEO from "../common/seo";
import GceoMessage from "../components/gceo-message";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team" pageDescription="Meet our team: experts in transportation, fleet, and mobility solutions." />
      <GceoMessage />
    </Wrapper>
  );
};

export default index;
