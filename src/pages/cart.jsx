import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Cart from "../components/cart";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"One Mobility Group - Cart"} />
      <Cart />
    </Wrapper>
  );
};

export default index;
