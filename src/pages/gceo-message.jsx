import React from "react";
import SEO from "../common/seo";
import GceoMessage from "../components/gceo-message";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Leadership Message" pageDescription="A message from our leader: We are dedicated to transforming urban mobility and enhancing the daily lives of millions. Innovation, customer-centric service, 26+ years of excellence, smarter cities worldwide." />
      <GceoMessage />
    </Wrapper>
  );
};

export default index;
