import React, { FC } from "react";

interface Props {
  asideComponents?: React.ReactNode;
  mainComponents?: React.ReactNode;
}

const ViewTripLayout: FC<Props> = ({ asideComponents, mainComponents }) => {
  return (
    <div className="flex w-full">
      <main className="w-full h-screen">
        {mainComponents}
      </main>
    </div>
  );
};

export default ViewTripLayout;
