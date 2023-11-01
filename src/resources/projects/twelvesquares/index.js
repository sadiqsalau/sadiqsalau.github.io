import { SiLaravel, SiReact, SiTailwindcss } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  id: "twelvesquares",
  title: "Twelvesquares",
  link: "https://twelvesquares.net",
  tags: ["Developer"],
  technologies: [SiReact, SiTailwindcss, SiLaravel],
  description: "twelvesquares.net",
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
    "Twelvesquares Technologies and Services Limited, holds an apex position around Africa in Providing 360 degrees technology, security services and products for our numerous clients.",
};
