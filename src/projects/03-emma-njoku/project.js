import { SiReact, SiTailwindcss} from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80";

export const project = {
  icon,
  title: "Emma Njoku",
  link: "https://emmanjoku.com",
  tags: ["Developer / Designer"],
  technologies: [SiReact, SiTailwindcss],
  description: "emmanjoku.com",
  images: Object.values(
    import.meta.glob("./screenshots/*.png", {
      eager: true,
      query: {
        metadata: "",
      },
    })
  ),
  fullDescription:
    "Worked hand in hand with (TwelveSquares - twelvesquares.net) to design the website of Mr. Emma Njoku",
};
