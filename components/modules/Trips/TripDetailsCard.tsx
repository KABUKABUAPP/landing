import React, { FC } from "react";
import TripDetailItem from "./TripDetailItem";
import { TripDetail } from "@/models/Trips";
import { capitalizeAllFirstLetters } from "@/utils";
import TripRatingCard from "./TripRatingCard";

interface Props {
  data?: any;
}

const TripDetailsCard: FC<Props> = ({ data }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg w-full p-3">
      <p className="font-bold text-sm mb-4">Trip details</p>
      <div className="flex flex-col w-full">
        <div className="border-b border-t border-[#E6E6E6] flex flex-col p-2 gap-3">
          <p className="text-sm font-bold">{capitalizeAllFirstLetters(data.origin)}</p>
          <p className="text-sm font-bold">{capitalizeAllFirstLetters(data.destination)}</p>
        </div>
        <div className="border-b border-[#E6E6E6] flex flex-col p-2 gap-3">
          <p className="flex justify-start items-center gap-2">
            <span className="text-sm font-bold">{capitalizeAllFirstLetters(data.carModel)}</span>
            <span className="text-xs">{capitalizeAllFirstLetters(data.carColor)}</span>
          </p>
          <p className="text-xs bg-[#E5EDFF] text-[#2C3FEF] px-3 py-2 rounded-md w-fit">{capitalizeAllFirstLetters(data.plateNumber)}</p>
        </div>

        <TripRatingCard
          rating={data.tripRating}
          comment={data.riderComment}
          driverName={data.driverFullname}
          driverImage={data.driverImage}
        />
      </div>
    </div>
  );
};

export default TripDetailsCard;
