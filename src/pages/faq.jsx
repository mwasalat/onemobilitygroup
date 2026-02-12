import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="FAQ" pageDescription="FAQ: What services we offer, where we operate, fleet size (2000+ taxis, 600+ buses, 350+ school buses), technology (IoT, AI, ITS), customized fleet solutions, automobile trading brands, service center, sustainability & ESG." />
      <Faq />
    </Wrapper>
  );
};

export default index;
