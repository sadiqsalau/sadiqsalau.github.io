import { SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  title: "Kazeem Tanimu",
  link: "https://kazeemtanimu.com",
  tags: ["TwelveSquares", "Designer"],
  technologies: [SiReact, SiTailwindcss],
  description: "kazeemtanimu.com",
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
    "Kazeem Tanimu is the founder and CEO of Kazeem Tanimu. TM is a fashion entrepreneur, lobbyst, social political strategist, social project engineer, iLeader and founder of TM Incorporated, a 24th Century Group of companies based in Nigeria. ",
};
