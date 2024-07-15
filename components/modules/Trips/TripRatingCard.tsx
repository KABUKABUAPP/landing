import React, { FC } from "react";
import Rating from "react-star-ratings";

import Card from "@/components/common/Card";
import { capitalizeAllFirstLetters } from "@/utils";
import Avatar from "@/components/common/Avatar";

interface Props {
  rating?: number;
  comment?: string;
  driverName?: string;
  driverImage?: string;
}

const TripRatingCard: FC<Props> = ({ rating, comment, driverName, driverImage }) => {
  const ratingValue = rating ? Math.floor(Number(rating)) : undefined;
  function isValidRating(val: any): boolean {
    return typeof val === "number" && val >= 0 && val <= 5;
  }
  return (
    <div className="flex items-center justify-start gap-2 p-2 border-b border-b-[#E6E6E6]">
      <div className="flex items-center justify-center w-[20%]">
        {driverName && <Avatar imageUrl={driverImage} fallBack={driverName[0]} />}
      </div>
      <div className="flex flex-col gap-2 p-2 w-[80%]">
        {driverName && <p className="text-xs font-bold">{capitalizeAllFirstLetters(driverName)}</p>}
        {ratingValue && isValidRating(ratingValue) && (
          <div className="w-full">
            <Rating
              rating={ratingValue}
              starDimension="15px"
              starSpacing="1px"
              starRatedColor="#1FD11B"
              numberOfStars={5}
            />
          </div>
        )}
        {comment && <p className="text-xs text-center font-bold">{comment}</p>}
      </div>
    </div>
  );
};

export default TripRatingCard;
