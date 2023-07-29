import { SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  title: "Kazeem Tanimu",
  link: "https://kazeemtanimu.com",
  tags: ["Developer / Designer"],
  technologies: [SiReact, SiTailwindcss],
  description: "kazeemtanimu.com",
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
    "I had the privilege of collaborating with a reputable web design company (TwelveSquares - twelvesquares.net) to create a remarkable website for Kazeem Tanimu",
};
