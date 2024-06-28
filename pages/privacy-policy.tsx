import { NextPage } from "next";
import React from "react";

import Header from "@/components/modules/PrivacyPolicy/Header";
import Container from "@/components/common/Container";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import Footer from "@/components/common/Footer";
import PolicyBody from "@/components/modules/PrivacyPolicy/PolicyBody";
import AppHeader from "@/components/common/AppHeader";
import { motion } from "framer-motion";
import Navbar from "@/components/common/Navbar";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ translateX: '-60%', }}
        whileInView={{
          translateX: 0,
          transition: { duration: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <AppHeader pageTitle="Kabukabu | Privacy Policy" />
        <Container>
          <Header />
          <PolicyBody />
          <DownloadCardContainer />
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
