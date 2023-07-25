import React from "react";
import CopyLogo from "../../../assets/copy.svg";
import OpenLogo from "../../../assets/i_open.svg";

export default function FooterCards(props) {
  return (
    <div className="flex flex-col items-start pb-[39px] gap-8">
      <div className="flex gap-3">
        <img src={props.icon} alt="logo" />
        <p className="text-[#404B51] text-xs leading-6 font-bold">
          {props.label}
        </p>
        <img src={CopyLogo} alt="logo" />
        <img src={OpenLogo} alt="logo" />
      </div>

      <div className="flex content-center gap-[18px]">
        {props.extraIcon.map((item) => (
          <img src={item.logo} alt="logo" key={item.key} />
        ))}
      </div>
    </div>
  );
}
