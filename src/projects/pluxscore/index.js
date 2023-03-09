import { SiBootstrap, SiLaravel, SiReact } from "react-icons/si";

import Icon from "./icon.png";

export const project = {
  title: "PluxScore",
  link: "https://pluxscore.com",
  icon: Icon,
  position: "Full-Stack Developer",
  technologies: [SiReact, SiBootstrap, SiLaravel],
  description: "Social media for sport fans",
  images: Object.values(
    import.meta.glob("./screenshots/*.png", {
      eager: true,
      query: {
        metadata: "",
      },
    })
  ),
};
