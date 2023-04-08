import { SiBootstrap, SiLaravel, SiReact } from "react-icons/si";

import icon from "./icon.png?w=80&h=80";

export const project = {
  icon,
  title: "PluxScore",
  link: "https://pluxscore.com",
  tags: ["Developer"],
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
