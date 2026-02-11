import React from "react";
import SEO from "../common/seo";
import GceoMessage from "../components/gceo-message";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"One Mobility Group - GCEO Message"} />
      <GceoMessage />
    </Wrapper>
  );
};

export default index;
