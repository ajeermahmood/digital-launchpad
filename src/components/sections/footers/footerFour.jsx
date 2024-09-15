import React from "react";
import Link from "next/link";
import FooterContact from "./footerContact";
import SocialIcons from "@/components/ui/socialIcons";
import ImportanceLinks from "./importanceLinks";
import Image from "next/image";

const FooterFour = () => {
  return (
    <footer className="bg-[#110201] pt-[200px] relative">
      <div
        className="z-0 w-full h-full bg-no-repeat bg-contain bg-top absolute top-0 left-0 opacity-100 blur-[6px]"
        style={{
          backgroundImage: `url(/images/background/services-bg1-1.png)`,
        }}
      >
        {" "}
      </div>
      <div className="z-10 relative container text-center sm:pb-20 pb-10 text-white">
        <div className="flex flex-row w-100 justify-center">
          <Image
            src={"/images/logo/educate-logo.webp"}
            width={150}
            height={100}
          />
        </div>

        <div className="flex flex-row justify-center gap-3 mt-3 text-[13px] sm:text-[17px]">
          <Link href={"/"}>Contact Us</Link>
          <span>|</span>
          <Link href={"/"}>Privacy Policy</Link>
          <span>|</span>
          <Link href={"/"}>Terms & Conditions</Link>
        </div>
        <div className="flex flex-col sm:px-[10rem] px-0">
          <p className="mt-5 text-[13px] sm:text-[17px]">
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          <p className="sm:mt-10 mt-5 text-[#eab4a2] text-[13px] sm:text-[17px]">
            ©2024 educate.io. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
