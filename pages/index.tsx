import Head from "next/head";
import Jumbotron from "@/components/modules/Home/Jumbotron/Jumbotron";
import RiderDriverContainer from "@/components/modules/Home/RiderDriverContainer";
import InstructionContainer from "@/components/modules/Home/InstructionContainer";
import DownloadCardContainer from "@/components/common/DownloadCardContainer";
import AppHeader from "@/components/common/AppHeader";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | Ride with Ease" />
      <Jumbotron />
      <RiderDriverContainer />
      <InstructionContainer />
      <DownloadCardContainer />
      <Footer />
    </>
  );
}
