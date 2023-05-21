import { SiBootstrap, SiCodeigniter } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80";

export const project = {
  icon,
  title: "Kazeem Tanimu",
  link: "https://kazeemtanimu.com",
  tags: ["Developer / Designer"],
  technologies: [SiBootstrap, SiCodeigniter],
  description: "kazeemtanimu.com",
  images: Object.values(
    import.meta.glob("./screenshots/*.png", {
      eager: true,
      query: {
        metadata: "",
      },
    })
  ),
  fullDescription:
    "I had the privilege of collaborating with a reputable web design company (TwelveSquares - twelvesquares.net) to create a remarkable website for Kazeem Tanimu",
};
