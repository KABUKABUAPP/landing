import React, { FC } from "react";

import Logo from "@/components/common/Logo";
import styles from "./styles.module.css";
import Image from "next/image";

const Banner: FC = () => {
  return (
    <div className={`relative w-full min-h-[75vh] h-[400px] pt-10 flex justify-center`}>
      <Image
        fill={true}
        alt={"Kabukabu Driver"}
        src={
          "https://res.cloudinary.com/dt0wfaxft/image/upload/v1688473352/Header_Image_dvcdye.png"
        }
        style={{ objectFit: "cover" }}
        priority
      />
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Banner;
