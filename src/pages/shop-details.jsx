import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import ShopDetails from "../components/shop-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Vehicle Details" pageDescription="Vehicle specifications, pricing, and availability from our fleet." />
      <ShopDetails />
    </Wrapper>
  );
};

export default index;
