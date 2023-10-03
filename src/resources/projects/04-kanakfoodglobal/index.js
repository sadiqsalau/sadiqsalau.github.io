import { SiBootstrap, SiCss3 } from "react-icons/si";

import icon from "./project-icon.png?w=80&h=80&format=webp";

export default {
  icon,
  title: "Kanak Food Global",
  link: "https://kanakfoodglobal.com.ng",
  tags: ["TwelveSquares", "Designer"],
  technologies: [SiCss3, SiBootstrap],
  description: "kanakfoodglobal.com.ng",
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
    "Kanak Foods Global operates a state-of-the-art Cold Room at Light House Estate Shopping Complex, By The Pent House Estate, Pyakasa, as part of food supply chain in Lugbe Community and Abuja.",
};
