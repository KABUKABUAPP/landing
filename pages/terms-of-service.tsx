import { NextPage } from "next";
import React from "react";

import { motion } from "framer-motion";
import AppHeader from "@/components/common/AppHeader";
import Container from "@/components/common/Container";
import Header from "@/components/modules/TermsOfService/Header";
import Footer from "@/components/common/Footer";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import TermsOfServiceBody from "@/components/modules/TermsOfService/TermsOfServiceBody";
import Navbar from "@/components/common/Navbar";

const TermsOfService: NextPage = () => {
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
        <AppHeader pageTitle="Kabukabu | Terms of Service" />
        <Container>
          <Header />
          <TermsOfServiceBody />
          <DownloadCardContainer />
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};

export default TermsOfService;
