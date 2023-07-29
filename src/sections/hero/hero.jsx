import Logo from "@/assets/images/logo.png?w=384&format=webp";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { SiLaravel, SiReact } from "react-icons/si";

const stack = [
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "Laravel",
    icon: SiLaravel,
  },
];

export const Hero = () => (
  <div
    className={clsx(
      "flex flex-col",
      "min-h-screen supports-[min-height:100dvh]:min-h-[100dvh]"
    )}
  >
    <div className="flex items-center grow py-20">
      <div className="container p-4 mx-auto">
        <div
          className={clsx(
            "flex flex-col",
            "items-center justify-center gap-3",
            "md:items-start md:flex-row"
          )}
        >
          {/* Photo */}
          <img
            src={Logo}
            alt={import.meta.env.VITE_APP_TITLE}
            className="w-48 h-48 rounded-full shrink-0"
          />

          <div className="flex flex-col items-center gap-2 md:items-start">
            {/* Intro */}
            <h1 className="text-4xl font-fredoka-one text-center">
              Hi, I'm{" "}
              <span className="inline-block text-green-500">Sadiq Salau</span>
            </h1>

            <h2 className="bg-green-300 text-neutral-900 text-center p-2 -skew-x-12">
              Full-Stack Web Developer
            </h2>

            <p className="p-2 bg-black text-white text-center">
              I develop websites and web applications.
            </p>

            {/* Stack */}
            <ul className="flex flex-wrap gap-2">
              {stack.map(({ title, icon: Icon }, i) => (
                <li key={i}>
                  <Icon title={title} className="w-6 h-6 text-stone-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Down Indicator */}
    <div className="flex justify-center flex-none p-4">
      <FaChevronDown className="animate-bounce" />
    </div>
  </div>
);
