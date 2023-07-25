import React, { useState } from "react";
import speraxlogo from "../../assets/sperax.svg";
import Button from "../button";
import openIcon from "../../assets/i_open.svg";
import dropDown from "../../assets/i_arrow_down.svg";
import themeSwitch from "../../assets/Sun.svg";
import moreIcon from "../../assets/i_more.svg";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import ConnectWallet from "../ConnectWallet";
import { useMetmask } from "../../helpers/CustomHooks/useMetamask";
import speBlack from "../../assets/icon_spa_select.svg";

export default function Header() {
  const { user, connectMetamask, onUserConnDisc, isNetworkSupport } =
    useMetmask();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navigationArr = [
    {
      key: 1,
      name: "Home",
      path: "#",
      className: " items-center flex font-bold font-semibold",
    },
    {
      key: 2,
      name: "Demeter",
      path: "#",
      className: "text-sm items-center flex leading-6 text-gray-900",
      logo: openIcon,
    },
    {
      key: 3,
      name: "Gauge",
      path: "#",
      className: "text-sm items-center flex leading-6 text-gray-900",
    },
    {
      key: 4,
      name: "Stake",
      path: "#",
      className: "text-sm items-center flex leading-6 text-gray-900",
    },
    {
      key: 5,
      name: "Buypack",
      path: "#",
      className: "text-sm items-center flex leading-6 text-gray-900",
    },
    {
      key: 6,
      name: "Swap",
      path: "#",
      className: "text-sm items-center flex leading-6 text-gray-900",
    },

    {
      key: 7,
      name: "More",
      path: "#",
      className: "text-sm items-center flex leading-6 text-gray-900",
      logo: dropDown,
    },
  ];

  const onConDiscWallet = (connect) => {
    setOpen(false);
    connect ? connectMetamask() : onUserConnDisc([]);
  };

  return (
    <header className="bg-white">
      {!isNetworkSupport && (
        <div className="p-1 bg-red-600">
          <p className="text-white">
            Network Not supported. Please switch to Ethereum network{" "}
          </p>
        </div>
      )}
      <nav
        className="mx-auto flex 2xl:px-[171px] xl:px-[100px] lg:px-[30px] md:px-10 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex py-5">
          <a href="#" className="-m-1.5 p-1.5 2xl:mr-5 lg:mr-2 ">
            <img className="h-8 w-auto" src={speraxlogo} alt="" />
          </a>

          <div className="flex lg:hidden ml-2">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex 2xl:gap-x-6 lg:gap-x-3">
            {navigationArr.map((item) => (
              <a href={item.path} className={item.className} key={item.key}>
                {item.name}
                {item.logo && <img className="ml-2" src={item.logo} />}
              </a>
            ))}
          </div>
        </div>
        <div className="flex 2xl:gap-x-7 lg:gap-x-3 md:gap-x-2 py-5">
          <div className="flex">
            <Button
              text="Buy SPA & USDs"
              className="px-5 py-1 text-sm items-center"
            />
          </div>
          <div className="flex border rounded-[90px] px-1 py-1 gap-[10px] cursor-pointer">
            <img src={speBlack} />
            <span>0</span>
            <img src={dropDown} />
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <Button
              text={
                user
                  ? user?.slice(0, 5) + "......" + user?.slice(-5)
                  : "Connect Wallet"
              }
              className="px-5 py-1 text-sm items-center"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className="flex justify-center items-center border rounded-full p-[6px] bg-[#E9EAF0] cursor-pointer">
            <img src={themeSwitch} />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <img src={moreIcon} />
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={speraxlogo} alt="logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationArr.map((item) => (
                  <a
                    href={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    key={item.key}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-3">
                <Button
                  text={
                    user
                      ? user?.slice(0, 5) + "....." + user?.slice(-5)
                      : "Connect Wallet"
                  }
                  className="px-5 py-3 text-sm items-center w-full justify-center"
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <ConnectWallet
        open={open}
        setOpen={setOpen}
        onConDiscWallet={onConDiscWallet}
        isConnected={user}
      />
    </header>
  );
}
