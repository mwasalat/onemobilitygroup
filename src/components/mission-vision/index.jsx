import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import MissionVisionArea from "@/src/components/homes/home/mission-vision-area";

const MissionVision = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Mission & Vision" innertitle="Mission & Vision" />
      <MissionVisionArea />
      <Footer />
    </>
  );
};

export default MissionVision;
