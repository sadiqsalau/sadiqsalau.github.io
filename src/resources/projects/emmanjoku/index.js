import { SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  id: "emmanjoku",
  title: "Emma Njoku",
  link: "https://emmanjoku.com",
  tags: ["TwelveSquares", "Designer"],
  technologies: [SiReact, SiTailwindcss],
  description: "emmanjoku.com",
  images: Object.values(
    import.meta.glob("./screenshots/*", {
      eager: true,
      import: "default",
      query: {
        as: "metadata",
        format: "webp",
      },
    })
  ),
  previewImages: Object.values(
    import.meta.glob("./screenshots/*", {
      eager: true,
      import: "default",
      query: {
        as: "metadata",
        format: "webp",
        withoutEnlargement: "",
        w: 350,
      },
    })
  ),
  fullDescription:
    "Emma Njoku is a consummate and dedicated executive with an exceptional entrepreneurial mindset. With sterling academic records and professional background, he continues to tower above his contemporaries, with businesses spanning across various continents.",
};
