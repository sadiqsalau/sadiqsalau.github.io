import clsx from "clsx";
import faq from "@/resources/faq";
import { Disclosure, Transition } from "@headlessui/react";
import { FaArrowRight } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading/section-heading";

export const FAQ = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>FAQ</SectionHeading>
    <p className="text-center text-stone-300">
      This section is designed to provide you with answers to the most commonly
      asked queries and shed light on my development process, skills, and
      expertise.
    </p>

    <ul className={clsx("my-4 flex flex-col gap-2")}>
      {faq.map(({ question, answer }, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <li className={clsx("rounded-lg", "overflow-x-hidden")}>
              {/* Question */}
              <Disclosure.Button
                className={clsx(
                  "p-4 bg-stone-800",
                  "flex w-full gap-4 items-center justify-between",
                  "text-left",
                  open
                    ? "text-green-500"
                    : "text-neutral-300 hover:text-green-500"
                )}
              >
                {question}
                <FaArrowRight
                  className={clsx("shrink-0", open ? "rotate-90" : "")}
                />
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
                    <p
                      key={i}
                      className="p-4 bg-stone-700/50 border-l-2 border-l-green-500"
                    >
                      {line}
                    </p>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </li>
          )}
        </Disclosure>
      ))}
    </ul>
  </div>
);
