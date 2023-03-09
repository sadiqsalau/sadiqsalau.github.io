import MochiIcon from "@/assets/images/projects/mochi/icon.png";
import PluxScoreIcon from "@/assets/images/projects/pluxscore/icon.png";
import {
  SiBootstrap,
  SiJavascript,
  SiLaravel,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const projectsList = [
  {
    title: "PluxScore",
    link: "https://pluxscore.com",
    icon: PluxScoreIcon,
    position: "Full-Stack Developer",
    technologies: [SiReact, SiBootstrap, SiLaravel],
    description: "Social media for sport fans",
    images: Object.values(
      import.meta.glob("@/assets/images/projects/pluxscore/screenshots/*.png", {
        eager: true,
        query: {
          metadata: "",
        },
      })
    ),
  },
  {
    title: "Mochi",
    link: "https://sadiqsalau.github.io/mochi",
    repo: "https://github.com/sadiqsalau/mochi",
    icon: MochiIcon,
    position: "Open-Source",
    technologies: [SiReact, SiJavascript, SiTailwindcss],
    description: "ReactJs Chat Template",
    images: Object.values(
      import.meta.glob("@/assets/images/projects/mochi/screenshots/*.png", {
        eager: true,
        query: {
          metadata: "",
        },
      })
    ),
  },
];
