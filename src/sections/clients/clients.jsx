import Marquee from "react-fast-marquee";
import clients from "@/resources/clients";
import clsx from "clsx";
import { SectionHeading } from "@/components/section-heading/section-heading";

export const Clients = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Clients</SectionHeading>
    <p className="text-center text-stone-300">
      Throughout my journey as a web developer, I've had the privilege of
      working with a diverse array of clients, each with unique goals, visions,
      and challenges.{" "}
    </p>

    <Marquee autoFill className={clsx("bg-white rounded-lg")} gradient>
      {clients.map((client, i) => (
        <img key={i} src={client.src} className="m-4 mx-7" />
      ))}
    </Marquee>
  </div>
);
