import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

import Icon from "./icon.png";

export const project = {
  title: "Mochi",
  link: "https://sadiqsalau.github.io/mochi",
  repo: "https://github.com/sadiqsalau/mochi",
  icon: Icon,
  tags: ["Open-Source"],
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
};
