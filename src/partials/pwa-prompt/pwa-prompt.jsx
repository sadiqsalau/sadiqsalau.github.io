import clsx from "clsx";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { useState } from "react";

export const PWAPrompt = () => {
  const [showToast, setShowToast] = useState(false);

  const closeToast = () => {
    setShowToast(false);
  };

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  useEffect(() => {
    setShowToast(offlineReady || needRefresh);
  }, [offlineReady, needRefresh]);

  return (
    <Transition
      show={showToast}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div
        className={clsx(
          "fixed top-0 w-full max-w-md left-1/2 -translate-x-1/2 p-4"
        )}
      >
        <div
          className={clsx(
            "bg-stone-900 border border-green-500 p-4 rounded-lg",
            "shadow-[5px_5px_0px_-2px_theme(colors.green.700)]",
            "flex gap-2 items-start"
          )}
        >
          <p className="grow">
            {offlineReady ? (
              <span>Page ready to work offline 🚀</span>
            ) : (
              <span>
                New content available, click on reload button to update. 🎉
              </span>
            )}
          </p>

          {/* Close Button */}
          <button
            onClick={closeToast}
            className={clsx(
              "font-bold px-4 py-1 outline-0 rounded-lg",
              "hover:ring hover:ring-green-700",
              "focus:ring focus:ring-green-700",
              "border border-green-500",
              offlineReady ? "bg-green-500 text-green-900" : "bg-stone-800"
            )}
          >
            Close
          </button>

          {/* Reload Button */}
          {needRefresh ? (
            <button
              onClick={() => updateServiceWorker(true)}
              className={clsx(
                "font-bold px-4 py-1 outline-0 rounded-lg",
                "hover:ring hover:ring-green-700",
                "focus:ring focus:ring-green-700",
                "border border-green-500",
                "bg-green-500 text-green-900"
              )}
            >
              Reload
            </button>
          ) : null}
        </div>
      </div>
    </Transition>
  );
};
