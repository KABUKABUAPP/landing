import AppStoreButton from "@/components/common/AppStoreButton";
import Container from "@/components/common/Container";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button/Button";

const Jumbotron: FC = () => {
  return (
    <>
      <div className={`min-h-[85vh] ${styles.jumboContainer}`}>
        <img src="/home/jumbo-bg.png" style={{ display: "none" }} />
        <Container>
          <div className="flex-col pt-20 h-[80vh] min-h-[500px] px-2">
            <motion.div
              initial={{ translateY: 185, opacity: 0 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="h-[40%]"
            >
              <div className="mb-3 flex justify-center"><Logo /></div>
              <p className="text-center font-bold text-4xl">
                Get Rides to anywhere, fast!
              </p>
              <div className="flex justify-center gap-6 mt-6 max-sm:gap-2">
                {/* <AppStoreButton store="android" />
                <AppStoreButton store="apple" /> */}
                <a href={"#"}>
                  <Button
                  title={'Download Rider App'}
                  className="!text-[16px] mt-6"
                  size="large" />
                </a>
                <a href={"https://kabukabudriver.page.link/app"}>
                  <Button
                  title={'Download Driver App'}
                  className="!text-[16px] mt-6"
                  size="large" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ translateX: "-100%", opacity: 0, }}
              whileInView={{
                translateX: 0,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className={`relative w-full max-w-[400px] mx-auto h-[60%] max-md:max-w-[200px]`}
            >
              <Image
                fill={true}
                alt="Download Kabukabu app"
                src={"https://res.cloudinary.com/dt0wfaxft/image/upload/v1684176303/taxi_wfsk9s.png"}
                style={{ objectFit: "contain", objectPosition: "50% 100%" }}
                className={styles.carBox}
                priority
              />
            </motion.div>
          </div>
        </Container>
      </div>
      <div className={`h-[30vh] min-h-[100px] max-sm:h-[100px] ${styles.jumboGradient}`}></div>
    </>
  );
};

export default Jumbotron;
