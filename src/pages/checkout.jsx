import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Checkout from "../components/checkout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"One Mobility Group - Checkout"} />
      <Checkout />
    </Wrapper>
  );
};

export default index;
