import AltFooter from "@/components/common/AltFooter";
import Logo from "@/components/common/Logo";
import React, { FC } from "react";
import { motion } from "framer-motion";

const UserDidNotConfirm: FC = () => {
  return (
    <motion.div
      initial={{ translateX: "-60%" }}
      whileInView={{
        translateX: 0,
        transition: { duration: 0.4 },
      }}
      viewport={{ once: true }}
    >
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <div className="flex justify-center py-4 pt-10">
            <Logo />
          </div>
          <div className="max-w-[600px] mx-auto pt-16">
            <p className="pt-20 text-center text-5xl">🙏🏽🙏🏽</p>
            <h1 className="text-center pt-4 text-5xl font-bold pb-4">
              Thank you
            </h1>
            <p className="text-center leading-9 text-base font-semibold">
              Thank you for your feedback
            </p>
          </div>
        </div>

        <AltFooter />
      </div>
    </motion.div>
  );
};

export default UserDidNotConfirm;
