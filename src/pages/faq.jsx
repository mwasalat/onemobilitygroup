import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"One Mobility Group - FAQ"} />
      <Faq />
    </Wrapper>
  );
};

export default index;
