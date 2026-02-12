import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Blog from "../components/blog";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog" pageDescription="News feeds and articles from One Mobility Group on urban mobility, fleet management, and sustainable transportation." />
      <Blog />
    </Wrapper>
  );
};

export default index;
