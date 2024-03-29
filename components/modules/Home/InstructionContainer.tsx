import Image from "next/image";
import React, { FC } from "react";
import InstructionItem from "./InstructionItem";
import Container from "@/components/common/Container";

const instructions = [
  {
    title: "Set Destination",
    body: `Set and update your destination with ease. Open the Kabukabu app and set where you’re going`,
    image: "https://res.cloudinary.com/dt0wfaxft/image/upload/v1684177715/setdestination_mfuttb.png",
  },
  {
    title: "Get A Ride",
    body: "Need a ride? Download the app today and get a ride from a Kabukabu driver within minutes, and enjoy an affordable ride to your destination.",
    image: "https://res.cloudinary.com/dt0wfaxft/image/upload/v1684177925/getride_sryzve.png",
  },
  {
    title: "Track Your Trip",
    body: "Tracking your trip made easy. With our Track Trip feature, wether you are waiting for your ride or or on the move you can view the status of your journey easly (and also share) for every mile you go.",
    image: "https://res.cloudinary.com/dt0wfaxft/image/upload/v1684177978/tracktrip_iyen43.png",
  },
  {
    title: "Easy Payment",
    body: "Your Ride payment has never been made easier, pay for your ride in seconds with our wallet feature, card and cash!",
    image: "https://res.cloudinary.com/dt0wfaxft/image/upload/v1684178022/easypayment_kdc4lb.png",
  },
];

const InstructionContainer: FC = () => {
  return (
    <Container>
      <div className="flex min-h-screen max-md:flex-col max-md:items-center gap-3 p-2 px-8 max-md:px-2">
        <div className="relative flex-1 max-lg:w-full lg:-translate-x-[70px] min-h-[400px]">
          <Image
            src={"https://res.cloudinary.com/dt0wfaxft/image/upload/v1684177289/phones_imodsu.png"}
            alt="Kabukabu app"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex-1 grid grid-cols-2 content-center gap-4 gap-y-10 max-md:grid-cols-1">
          {instructions.map((item, idx) => {
            return <InstructionItem {...item} key={idx} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default InstructionContainer;
