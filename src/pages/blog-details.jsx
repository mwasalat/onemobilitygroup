import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import BlogDetails from "../components/blog-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" pageDescription="Read the full article: news and insights on mobility, transport, and industry updates from One Mobility Group." />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
