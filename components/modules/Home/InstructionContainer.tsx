import Image from "next/image";
import React, { FC } from "react";
import InstructionItem from "./InstructionItem";
import Container from "@/components/common/Container";
import route from '@/assets/route.svg';
import vehicle from '@/assets/vehicle.svg';
import locationPin from '@/assets/locationPin.svg';
import wallet from '@/assets/wallet.svg';


const instructions = [
  {
    title: "Set Destination",
    body: `Set and update your destination with ease. Open the Kabukabu app and set where you’re going`,
    image: route
  },
  {
    title: "Get A Ride",
    body: "Need a ride? Download the app today and get a ride from a Kabukabu driver within minutes, and enjoy an affordable ride to your destination.",
    image: vehicle
  },
  {
    title: "Track Your Trip",
    body: "Tracking your trip made easy. With our Track Trip feature, wether you are waiting for your ride or or on the move you can view the status of your journey easly (and also share) for every mile you go.",
    image: locationPin
  },
  {
    title: "Easy Payment",
    body: "Your Ride payment has never been made easier, pay for your ride in seconds with our wallet feature, card and cash!",
    image: wallet
  },
];

const InstructionContainer: FC = () => {
  return (
    <Container>
      <div className="flex min-h-screen max-md:flex-col max-md:items-center gap-3 p-2 px-8 max-md:px-2">
        <div className="relative flex-1 max-lg:w-full lg:-translate-x-[70px] min-h-[400px]">
          <Image
            src={"https://res.cloudinary.com/kabukabu/image/upload/v1714335045/landing/Group_Phones_1_sn7bf3.png"}
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
