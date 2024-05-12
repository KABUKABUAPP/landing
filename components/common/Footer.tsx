import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import Container from "./Container";
import Logo from "./Logo";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<Props> = (props) => {
  const year = new Date().getFullYear();

  return (
    <div {...props} className="bg-[#FFFFFF] mt-8">
      <Container>
        <div className="px-8 max-md:px-2">
          <div className="flex justify-between py-6 border-b border-b-[#A6A6A6] max-md:flex-col max-md:gap-4">
            <div className="flex items-center gap-4">
              <Link href="/about-us">
                <p className="text-sm">About Kabukabu</p>
              </Link>
              <Link href="">
                <p className="text-sm">Talk To Us</p>
              </Link>
              <Link href="">
                <p className="text-sm">Our Hubs</p>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href={"https://web.facebook.com/profile.php?id=100091741160703"}>
                <FacebookIcon />
              </Link>

              <Link href={"https://twitter.com/getkabukabu"}>
                <TwitterIcon />
              </Link>

              <Link href={"http://youtube.com/@KabukabuApp"}>
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center py-6 pb-20 max-md:pb-6 max-md:flex-col max-md:gap-4 max-md:items-start">
            <p className="text-xs order-1">
              &copy; {year} Kabukabu. All rights reserved
            </p>
            <Link href={"/"} className="order-2 max-md:order-3">
              <Logo />
            </Link>
            <div className="flex items-center gap-6 order-3 max-md:order-2">
              <Link href={"/terms-of-service"}>
                <p className="text-xs">Terms of Service</p>
              </Link>
              <Link href={"/privacy-policy"}>
                <p className="text-xs">Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
