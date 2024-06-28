import { NextPage } from "next";
import React, { useState } from "react";

import StepOne from "@/components/modules/GuarantorsForm/StepOne";
import StepTwo from "@/components/modules/GuarantorsForm/StepTwo";
import StepThree from "@/components/modules/GuarantorsForm/StepThree";
import UserDidNotConfirm from "@/components/modules/GuarantorsForm/UserDidNotConfirm";
import AppHeader from "@/components/common/AppHeader";
import Navbar from "@/components/common/Navbar";

const GuarantorsForm: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [userDidNotConfirm, setUserDidNotConfirm] = useState(false);

  return (
    <>
      <AppHeader pageTitle="Kabukabu | Guarantors Form" />
      <Navbar />
      <div className="!bg-[#F8F8F8]">
        {!userDidNotConfirm && currentStep === 1 && (
          <StepOne
            handleNextStep={() => {
              setCurrentStep((step) => (step = 2));
            }}
            handleDoNotConfirm={() => setUserDidNotConfirm(true)}
          />
        )}
        {!userDidNotConfirm && currentStep === 2 && (
          <StepTwo
            handleNextStep={() => {
              setCurrentStep((step) => (step = 3));
            }}
          />
        )}
        {!userDidNotConfirm && currentStep === 3 && <StepThree />}
        {userDidNotConfirm && <UserDidNotConfirm />}
      </div>
    </>
  );
};

export default GuarantorsForm;
