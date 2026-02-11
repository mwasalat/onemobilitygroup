import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service Details" innertitle="One Mobility Services" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default ServiceDetails;
