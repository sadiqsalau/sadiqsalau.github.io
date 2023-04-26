import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80";

export const project = {
  icon,
  title: "Mochi",
  link: "https://sadiqsalau.github.io/mochi",
  repo: "https://github.com/sadiqsalau/mochi",
  tags: ["Template"],
  technologies: [SiReact, SiJavascript, SiTailwindcss],
  description: "ReactJs Chat Template",
  images: Object.values(
    import.meta.glob("./screenshots/*.png", {
      eager: true,
      query: {
        metadata: "",
      },
    })
  ),
  fullDescription:
    "Mochi is a Chat Application Template I created using the UI Design from Shalini Dey (credits)",
};
