import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Shop from "../components/shop";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Fleet" pageDescription="Our products: browse vehicle fleet for rental and lease. Cars, SUVs, commercial vehicles from One Mobility Group." />
      <Shop />
    </Wrapper>
  );
};

export default index;
