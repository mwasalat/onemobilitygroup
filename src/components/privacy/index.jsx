import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PrivacyContent from "./privacy-content";

const Privacy = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Privacy" innertitle="Privacy Policy" />
      <PrivacyContent />
      <Footer />
    </>
  );
};

export default Privacy;
