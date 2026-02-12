import React from "react";
import SEO from "../common/seo";
import GceoMessage from "../components/gceo-message";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" pageDescription="Team member profile and expertise." />
      <GceoMessage />
    </Wrapper>
  );
};

export default index;
