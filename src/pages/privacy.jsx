import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Privacy from "../components/privacy";

const PrivacyPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Privacy Policy"
        pageDescription="Privacy Policy of One Mobility Group: how we collect, use, and protect your information when you use our website and mobility services. Contact us for data requests."
      />
      <Privacy />
    </Wrapper>
  );
};

export default PrivacyPage;
