import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Terms from "../components/terms";

const TermsPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Terms of Use"
        pageDescription="Terms of Use for the One Mobility Group website and services. Acceptance of terms, use of website, intellectual property, disclaimers, and governing law."
      />
      <Terms />
    </Wrapper>
  );
};

export default TermsPage;
