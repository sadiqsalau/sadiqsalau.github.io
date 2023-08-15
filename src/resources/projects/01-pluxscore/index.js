import { SiLaravel, SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  title: "PluxScore",
  link: "https://pluxscore.com",
  tags: ["Developer"],
  technologies: [SiReact, SiTailwindcss, SiLaravel],
  description: "pluxscore.com",
  images: Object.values(
    import.meta.glob("./screenshots/*", {
      eager: true,
      query: {
        metadata: "",
        format: "webp",
      },
    })
  ),
  previewImages: Object.values(
    import.meta.glob("./screenshots/*", {
      eager: true,
      query: {
        metadata: "",
        format: "webp",
        withoutEnlargement: "",
        w: 350,
      },
    })
  ),
  fullDescription:
    "Dive into the exhilarating world of sports with Pluxscore, the premier social media platform designed exclusively for sports enthusiasts. Connect, chat, and share your passion for all things sports in one dynamic and engaging space.",
};
