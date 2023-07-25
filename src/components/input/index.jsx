import React from "react";

export default function Input(props) {
  return (
    <div className={props.className}>
      <label
        htmlFor="username"
        className="block text-base font-medium leading-6 text-start text-black"
      >
        {props.label}
      </label>
      <div className="mt-2.5">
        <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input
            {...props}
            id={props.name}
            className={`max-w-full flex-1 rounded-xl border-[1px] border-solid border-[${
              props.error ? "#fd2828" : "#CCC"
            }]  bg-white p-3 sm:text-base sm:leading-6 placeholder:text-[#B2B2B2]  placeholder:font-normal placeholder:text-xl`}
          />
        </div>
        {props.error && (
          <p className="mt-1 pl-1 text-red-500 text-start">{props.error}</p>
        )}
      </div>
    </div>
  );
}
