import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import About from "../components/about";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About Us" pageDescription="Trusted experience over 26+ years. Enhancing mass transit for smarter cities. Innovation & technology driven solutions, environmental responsibility & ESG commitment. A message from our leader and our mission & vision." />
      <About />
    </Wrapper>
  );
};

export default index;
