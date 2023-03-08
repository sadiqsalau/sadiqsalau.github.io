import clsx from "clsx";
import { SectionHeading } from "@/components/section-heading/section-heading";

import { contactHandles } from "./contact-handles";

export const Contact = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Contact / Handles</SectionHeading>

    <div
      className={clsx(
        "border border-green-500",
        "rounded-lg p-4",
        "flex flex-col gap-2",
        "shadow-[5px_5px_0px_-2px] shadow-green-700"
      )}
    >
      <p className="px-2">
        Feel free to reach out to me via any of the platforms below
      </p>

      {/* Handles */}
      <ul>
        {contactHandles.map(({ icon: Icon, content, ...props }, i) => (
          <li key={i}>
            <a
              {...props}
              className={clsx(
                "flex items-center gap-2",
                "p-2 rounded-lg text-green-500",
                "hover:bg-green-500 hover:text-green-900"
              )}
            >
              <Icon className="w-5 h-5" /> <span>{content}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
