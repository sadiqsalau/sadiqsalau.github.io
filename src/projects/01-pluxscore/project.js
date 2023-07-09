import { SiLaravel, SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80";

export const project = {
  icon,
  title: "PluxScore",
  link: "https://pluxscore.com",
  tags: ["Developer"],
  technologies: [SiReact, SiTailwindcss, SiLaravel],
  description: "Social media for sport fans",
  images: Object.values(
    import.meta.glob("./screenshots/*.png", {
      eager: true,
      query: {
        metadata: "",
      },
    })
  ),
  previewImages: Object.values(
    import.meta.glob("./screenshots/*.png", {
      eager: true,
      query: {
        metadata: "",
        withoutEnlargement: "", 
        h: 450,
      },
    })
  ),
  fullDescription:
    "As a ReactJS + Laravel developer at Pluxscore, I was responsible for developing and maintaining web applications using these technologies. This include creating interactive user interfaces, integrating with backend APIs and databases, and implementing security features to protect user data.",
};
