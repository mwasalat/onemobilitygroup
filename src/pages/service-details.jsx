import React from "react";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Service Details" pageDescription="Detailed overview of our mobility services: fleet solutions, taxi, school transport, trading, service center, and technology for businesses and communities." />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
