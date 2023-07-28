import { SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80";

export default {
  icon,
  title: "Kazeem Tanimu",
  link: "https://kazeemtanimu.com",
  tags: ["Developer / Designer"],
  technologies: [SiReact, SiTailwindcss],
  description: "kazeemtanimu.com",
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
        w: 350,
      },
    })
  ),
  fullDescription:
    "I had the privilege of collaborating with a reputable web design company (TwelveSquares - twelvesquares.net) to create a remarkable website for Kazeem Tanimu",
};
