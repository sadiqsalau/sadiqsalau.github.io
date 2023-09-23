import { SiWordpress } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  title: "Hedgromimcs",
  link: "https://hedgromimcs.com.ng",
  tags: ["Assistant Developer"],
  technologies: [SiWordpress],
  description: "hedgromimcs.com.ng",
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
    "Hedgromimcs Investments PLC attracts foreign and local direct investors to promote local manufacturing of delay needs and industrial goods.",
};