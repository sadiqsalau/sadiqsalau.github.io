import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronRight } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading/section-heading";

import faqList from "./faq-list";

export const FAQ = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>FAQ</SectionHeading>
    <p className="text-center text-stone-300">
      This section is designed to provide you with answers to the most commonly
      asked queries and shed light on my development process, skills, and
      expertise.
    </p>

    <div className={clsx("flex flex-col gap-2")}>
      {faqList.map(({ question, answer }, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <div className={clsx("rounded-lg", "overflow-x-hidden")}>
              {/* Question */}
              <Disclosure.Button
                className={clsx(
                  "p-4 bg-stone-800",
                  "flex w-full gap-4 items-center justify-between",
                  "font-bold",
                  "text-left",
                  open
                    ? "text-green-500"
                    : "text-neutral-400 hover:text-green-500"
                )}
              >
                {question}
                <span
                  className={clsx(
                    "bg-stone-700",
                    "w-9 h-9",
                    "flex items-center justify-center",
                    "rounded-full",
                    "shrink-0"
                  )}
                >
                  <FaChevronRight className={clsx(open ? "rotate-90" : "")} />
                </span>
              </Disclosure.Button>

              {/* Answer */}
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="p-4 pt-0 bg-stone-800 flex flex-col gap-2">
                  {answer.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);
