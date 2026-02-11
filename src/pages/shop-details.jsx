import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import ShopDetails from "../components/shop-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"One Mobility Group - Vehicle Details"} />
      <ShopDetails />
    </Wrapper>
  );
};

export default index;
