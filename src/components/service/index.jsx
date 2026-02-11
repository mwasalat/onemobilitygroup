import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceArea from "./service-area";
import FeatureArea from "./feature-area";
import Footer from "@/src/layout/footers/footer";

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service" innertitle="Our Services" />
      <ServiceArea />
      <FeatureArea />
      <Footer />
    </>
  );
};

export default Service;
