import Container from "@/components/common/Container";
import React, { FC } from "react";

import DownloadCard from "../modules/Home/DownloadCard";

const DownloadCardContainer: FC = () => {
  return (
    <Container>
      <div className="flex items-center max-md:flex-col  px-8 max-md:px-2 justify-center w-full gap-x-2 gap-y-10 mt-9">
        <div className="flex-1 flex justify-center">
          <DownloadCard
            bgColor="#FFF5D8"
            title="Ride With Us"
            body="Get Kabukabu Rider App and enjoy the riding experience"
            image="https://res.cloudinary.com/dt0wfaxft/image/upload/v1684178108/ridewithus_hb5dvn.png"
            downloadLink="https://kabukaburider.page.link/app"
            buttonTitle="Download Rider App"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <DownloadCard
            bgColor="#FEE2E9"
            title="Drive With Us"
            body="Drive and earn seamlessly using the Kabukabu Driver App"
            image="https://res.cloudinary.com/dt0wfaxft/image/upload/v1684178152/drivewithus_mw5jvj.png"
            downloadLink="https://kabukabudriver.page.link/app"
            buttonTitle="Download Driver App"
          />
        </div>
      </div>
    </Container>
  );
};

export default DownloadCardContainer;
