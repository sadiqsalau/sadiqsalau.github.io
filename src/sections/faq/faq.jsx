import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

import { SectionHeading } from "@/components/section-heading/section-heading";

const list = [
  {
    question: "What is ReactJS, and why is it popular for web development?",
    answer:
      "ReactJS is a JavaScript library for building user interfaces. It allows developers to create dynamic and interactive UI components, making web applications more efficient and responsive. ReactJS's popularity stems from its virtual DOM, reusability of components, and the strong community support.",
  },
  {
    question:
      "What is Laravel, and why is it a preferred choice for backend development?",
    answer:
      "Laravel is a PHP web application framework known for its elegant syntax and robust features. It simplifies common tasks like routing, caching, and authentication, enabling developers to build scalable and secure web applications quickly. Laravel's popularity is due to its ease of use, extensive documentation, and the Laravel ecosystem.",
  },
  {
    question: "Why do you use Tailwind CSS?",
    answer: "I use Tailwind CSS for several compelling reasons. First and foremost, Tailwind CSS allows me to rapidly build and style user interfaces with its utility-first approach.\n\nBy leveraging pre-designed utility classes directly in my HTML markup, I can save significant development time and effort. The framework's highly customizable nature enables me to create unique and visually appealing designs tailored to my clients' specific needs."
  },
  {
    question:
      "Can you explain your development process for creating web applications?",
    answer:
      "Sure! My development process typically involves understanding the project requirements, acquiring the UI/UX, setting up the development environment, writing clean and maintainable code, conducting thorough testing, and finally deploying the application.\n\nI also emphasize regular communication with clients to ensure their feedback is incorporated throughout the development cycle.",
  },
  {
    question:
      "How do you ensure the security of web applications built with Laravel?",
    answer:
      "Security is a top priority in all my projects. In Laravel, I implement secure authentication mechanisms, sanitize user inputs to prevent SQL injection and cross-site scripting (XSS) attacks, utilize HTTPS for secure data transmission, and follow best practices to safeguard sensitive information.",
  },
  {
    question:
      "Are you available for freelance or contract work? How can I get in touch?",
    answer:
      "Yes, I am available for freelance and contract opportunities. I'd love to discuss your project requirements and how I can assist you. Please feel free to reach out to me through the handles on this website. I will get back to you promptly.",
  },
];

export const FAQ = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>FAQ</SectionHeading>
    <p className="p-4 rounded-md bg-stone-800">
      This section is designed to provide you with answers to the most commonly
      asked queries and shed light on my development process, skills, and
      expertise.
    </p>

    <div className={clsx("flex flex-col gap-1")}>
      {list.map(({ question, answer }, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <div
              className={clsx(
                "rounded-lg",
                "overflow-x-hidden",
                "border",
                open ? "border-green-500" : "border-transparent",
              )}
            >
              <Disclosure.Button
                className={clsx(
                  "p-4 bg-stone-800",
                  "flex w-full gap-4 items-center",
                  "font-bold",
                  "text-left",
                  open
                    ? "text-green-500"
                    : ["text-stone-400", "hover:text-stone-300"],
                )}
              >
                <span className={clsx(
                    "bg-stone-700",
                    "w-9 h-9",
                    "flex items-center justify-center",
                    "rounded-full",
                    "shrink-0"
                  )}>
                  <FaChevronUp className={clsx(open ? "rotate-180" : "")} />{" "}
                </span>
                {question}
              </Disclosure.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="p-4 whitespace-pre-line">{answer}</Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);
