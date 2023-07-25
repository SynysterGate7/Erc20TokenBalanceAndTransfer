import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function Button({ loading, ...props }) {
  return (
    <button
      {...props}
      className={`flex flex-start rounded-[90px] bg-[#31C1BF] hover:bg-[#3ab1ab] text-white text-base font-semibold disabled:bg-[#4b9594] ${props.className}`}
    >
      {loading ? (
        <ThreeCircles
          width={50}
          height={25}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      ) : (
        props.text
      )}
    </button>
  );
}
