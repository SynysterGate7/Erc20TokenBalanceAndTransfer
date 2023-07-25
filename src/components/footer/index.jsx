import React from "react";
import speraxlogo from "../../assets/sperax_logo_gray.svg";
import DiscordLogo from "../../assets/Discord.svg";
import TwitterLogo from "../../assets/Twitter.svg";
import Telegram from "../../assets/Telegram.svg";
import Github from "../../assets/github.svg";
import Medium from "../../assets/Medium.svg";
import FooterCards from "./footercards";
import More from "../../assets/more.svg";
import Mobi from "../../assets/mobi.svg";
import Usds from "../../assets/i_usds.svg";
import Spas from "../../assets/icon_spa_select.svg";
import veSpas from "../../assets/icon_vespa.svg";
import wSpas from "../../assets/icon_wspa_select.svg";

export default function Footer() {
  const footerCardArr = [
    {
      key: 1,
      icon: Usds,
      label: "USDs Arbitrum",
      extraIcon: [
        {
          key: 11,
          logo: More,
        },
        {
          key: 12,
          logo: Mobi,
        },
      ],
    },
    {
      key: 2,
      icon: Spas,
      label: "SPA Arbitrum",
      extraIcon: [
        {
          key: 13,
          logo: More,
        },
        {
          key: 14,
          logo: Mobi,
        },
      ],
    },

    {
      key: 3,
      icon: veSpas,
      label: "veSPA Arbitrum",
      extraIcon: [
        {
          key: 15,
          logo: More,
        },
        {
          key: 16,
          logo: Mobi,
        },
      ],
    },
    {
      key: 4,
      icon: wSpas,
      label: "wSPA Ethereum",
      extraIcon: [
        {
          key: 17,
          logo: More,
        },
        {
          key: 18,
          logo: Mobi,
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#F4F6F8] w-full h-full">
      <div className="xl:px-[171px] xl:py-10 sm:px-5 sm:py-5">
        <div className="p-2 sm:px-4 ">
          <div className="grid sm:flex 2xl:gap-[1055px] xl:gap-[590px] lg:gap-[475px]  sm:gap-[220px] sm:pb-[36px] pb-4 mb-2 sm:mb-7 gap-[15px]">
            <div className="flex items-center gap-6">
              <a href="#" className="text-xl">
                <img src={speraxlogo} alt="logo" />
              </a>
              <button className="flex pt-2 pb-3 px-4 items-start bg-[#F4F6F8] rounded-full border border-gray-300">
                Forum
              </button>
              <button className="flex pt-2 pb-3 px-4 items-start bg-[#F4F6F8] rounded-full border border-gray-300">
                Snapshot
              </button>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className=" text-xl">
                <img src={DiscordLogo} alt="logo" />
              </a>
              <a href="#" className=" text-xl">
                <img src={TwitterLogo} alt="logo" />
              </a>
              <a href="#" className=" text-xl">
                <img src={Telegram} alt="logo" />
              </a>
              <a href="#" className=" text-xl">
                <img src={Github} alt="logo" />
              </a>
              <a href="#" className=" text-xl">
                <img src={Medium} alt="logo" />
              </a>
            </div>
          </div>
          <div className="grid sm:flex justify-between lg:gap-[94.89px] sm:gap-[20px] sm:mb-14 mb-2 ">
            {footerCardArr.map((item) => (
              <FooterCards key={item.key} {...item} />
            ))}
          </div>

          <div className="grid sm:flex 2xl:gap-[1050px] xl:gap-[586px] lg:gap-[472px] sm:gap-[215.94px] mb-2 sm:mb-7">
            <div>
              <span className="text-sm  text-[#ABB7BD] font-normal leading-5">
                © 2023 Sperax Inc. All rights reserved.
              </span>
            </div>
            <div className="grid sm:flex p-1 gap-2">
              <a
                className="text-sm text-[#404B51] leading-6 font-bold"
                href="#"
              >
                Terms of Service
              </a>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-[#C8CFD3] ml-2 mr-1 w-[6px] h-[6px] " />
              </div>

              <a
                className="text-sm text-[#404B51] leading-6 font-bold"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
