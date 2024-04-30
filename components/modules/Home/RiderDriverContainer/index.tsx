import React, { FC, useState } from "react";
import styles from "./styles.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import RiderDriverSwitch from "../RiderDriverSwitch";
import RiderDriverBulletContainer from "../RiderDriverBulletContainer";

const bulletPoints = {
  rider: [
    "Get rides quickly",
    "Safe and secured rides",
    "We monitor ride to protect riders",
    "Professionally trained drivers",
  ],
  drivers: [
    "No percentage per trip",
    "Commission based",
    "Full control of your earnings",
    "Instant Ride Requests",
  ],
};

const RiderDriverContainer: FC = () => {
  const [isRider, setIsRider] = useState<boolean>(true);

  return (
    <Container>
      <div
        className={`${styles.riderDriverContainer} mx-auto w-full  px-8 max-md:px-2 max-md:bg-[#fff]`}
      >
        <div className={styles.imageBox}>
          <Image
            fill={true}
            alt={"Kabukabu Driver"}
            src={isRider ? "https://res.cloudinary.com/kabukabu/image/upload/v1714335048/landing/Image_Frame_yiign3.png" : "https://res.cloudinary.com/kabukabu/image/upload/v1714335040/landing/Rectangle_11_oesorp.png"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.swtichBox}>
          <div>
            <RiderDriverSwitch isRider={isRider} setIsRider={setIsRider} />
          </div>
        </div>
        <div className={styles.bulletsBox}>
          <div>
            <RiderDriverBulletContainer
              data={isRider ? bulletPoints.rider : bulletPoints.drivers}
              isRider={isRider}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RiderDriverContainer;
