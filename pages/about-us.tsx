import { NextPage } from "next";
import React from "react";

import AppHeader from "@/components/common/AppHeader";
import Container from "@/components/common/Container";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import Footer from "@/components/common/Footer";
import CoreStrengthContainer from "@/components/modules/AboutUs/CoreStrengthContainer";
import coreStrengthData from "../json_data/core-stength.json";

import { motion } from "framer-motion";
import WhyKabukabu from "@/components/modules/AboutUs/WhyKabukabu";
import MissionVisionCardContainer from "@/components/modules/AboutUs/MissionVisionCardContainer";
import missionVision from "../json_data/mission-vision.json";
import Intro from "@/components/modules/AboutUs/Intro";
import Banner from "@/components/modules/AboutUs/Banner";
import Navbar from "@/components/common/Navbar";

const AboutUs: NextPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ translateX: "-60%" }}
        whileInView={{
          translateX: 0,
          transition: { duration: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <AppHeader pageTitle="Kabukabu | About Kabukabu" />
        <Banner />
        <Container>
          <Intro />
          <MissionVisionCardContainer data={missionVision} />
          <WhyKabukabu />
          <CoreStrengthContainer
            data={coreStrengthData}
            title="Our Core Strength"
          />
          <DownloadCardContainer />
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};

export default AboutUs;
