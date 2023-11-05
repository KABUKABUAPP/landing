import React, { FC } from "react";
import RiderDriverBullet from "./RiderDriverBullet";
import Button from "@/components/ui/Button/Button";

interface Props {
  data: string[];
  isRider: boolean;
}

const RiderDriverBulletContainer: FC<Props> = ({ data, isRider }) => {

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <RiderDriverBullet
            title={item}
            isLastChild={idx === data.length - 1}
            key={idx}
          />
        );
      })}
      {
        isRider ?
        <a href={"#"}>
          <Button
          title={'Download Rider App'}
          className="!text-[16px] mt-6"
          size="large" />
        </a> :
        <a href={"https://kabukabudriver.page.link/app"}>
          <Button
          title={'Download Driver App'}
          className="!text-[16px] mt-6"
          size="large" />
        </a>
      }
    </div>
  );
};

export default RiderDriverBulletContainer;
