import Head from "next/head";
import AppHeader from "@/components/common/AppHeader";
import Footer from "@/components/common/Footer";
import JumbotronRef from "@/components/modules/Home/JumbotronRef/JumbotronRef";

export default function RefSingle() {
  return (
    <>
      <AppHeader pageTitle="Kabukabu | Referral" />
      <JumbotronRef />
      <Footer />
    </>
  );
}
