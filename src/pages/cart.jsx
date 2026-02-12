import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Cart from "../components/cart";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Cart" pageDescription="Your cart. Review items before checkout." />
      <Cart />
    </Wrapper>
  );
};

export default index;
