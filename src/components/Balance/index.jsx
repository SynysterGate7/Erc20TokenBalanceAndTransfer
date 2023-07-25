import React from "react";

export default function Balance({ balance, symbol }) {
  return (
    <div className="mx-auto rounded-lg bg-[#F4F6F8] shadow-md pt-14">
      <div className="bg-white p-5 border  border-[#CCC] rounded-b-lg">
        <p className="flex justify-around ">
          Token Balance{" "}
          <span className="text-black font-semibold text-xl">
            {balance} {symbol}
          </span>
        </p>
      </div>
    </div>
  );
}
