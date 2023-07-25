import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const metaMask =
  "data:image/png;base64,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";
export default function ConnectWallet({
  open,
  setOpen,
  onConDiscWallet,
  isConnected,
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-7">
                  <div className="sm:flex">
                    <div className="mt-3 text-center w-full sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6 text-gray-900"
                      >
                        {isConnected
                          ? `Disconnect Your Wallet`
                          : `Connect Your Wallet`}
                      </Dialog.Title>
                      <div
                        className="mt-2 w-full flex border border-[#e7ecef] p-6 hover:shadow-lg cursor-pointer"
                        onClick={() =>
                          isConnected
                            ? onConDiscWallet(false)
                            : onConDiscWallet(true)
                        }
                      >
                        <img src={metaMask} />
                        <p className="ml-6 text-gray-500 flex items-center text-2xl">
                          {isConnected
                            ? `Disconnect Your Metamask`
                            : `Metamask`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
