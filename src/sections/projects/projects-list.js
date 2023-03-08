import MochiIcon from "@/assets/images/projects/mochi/logo.svg";
import PluxScoreIcon from "@/assets/images/projects/pluxscore/icon@128.png";
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
  },
  {
    title: "Mochi",
    link: "https://github.com/sadiqsalau/mochi",
    icon: MochiIcon,
    position: "Open-Source",
    technologies: [SiReact, SiJavascript, SiTailwindcss],
    description: "ReactJs Chat Template",
  },
];
