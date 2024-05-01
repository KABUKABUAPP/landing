import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Logo: FC = () => {
  const router = useRouter();

  return (
    <div className="relative h-8 w-36 cursor-pointer" onClick={()=>router.push('/')}>
      <Image
        src={"https://res.cloudinary.com/kabukabu/image/upload/v1714335039/landing/Black_Variation_1_qjdlqj.png"}
        fill={true}
        alt="Kabukabu, ride hailing service"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Logo;
