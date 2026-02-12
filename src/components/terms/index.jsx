import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import TermsContent from "./terms-content";

const Terms = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Terms" innertitle="Terms of Use" />
      <TermsContent />
      <Footer />
    </>
  );
};

export default Terms;
