import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import GceoMessageArea from "./gceo-message-area";

const GceoMessage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb title="GCEO Message" innertitle="GCEO Message" />
        <GceoMessageArea />
      </main>
      <Footer />
    </>
  );
};

export default GceoMessage;
