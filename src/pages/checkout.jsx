import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Checkout from "../components/checkout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Checkout" pageDescription="Complete your booking or request." />
      <Checkout />
    </Wrapper>
  );
};

export default index;
