import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import BlogDetails from "../components/blog-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"One Mobility Group - Blog Details"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
