import React from "react";
import { EXPLORER_URLS } from "../../helpers/Constants/constant";

export default function CommonBox({ hash }) {
  const chainId = window.ethereum.chainId;
  return (
    <div className="mx-auto  rounded-lg bg-[#F4F6F8] shadow-md p-6 border-[#CCC] rounded-b-lg mt-5">
      View recent transaction on explorer{" "}
      <a
        className="text-lg font-sans underline text-blue-800"
        href={`${
          chainId === "0x5"
            ? EXPLORER_URLS.ETHEREUM.GOERLI
            : EXPLORER_URLS.ETHEREUM.MAINNET
        }/tx/${hash}`}
        target="_blank"
      >
        {hash?.slice(0, 5) + "......" + hash?.slice(-5)}
      </a>
    </div>
  );
}
