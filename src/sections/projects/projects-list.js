import MochiIcon from "@/assets/images/projects/mochi/logo.svg";
import PluxScoreIcon from "@/assets/images/projects/pluxscore/icon@128.png";
import PluxScoreImage01 from "@/assets/images/projects/pluxscore/screenshots/01.png";
import PluxScoreImage02 from "@/assets/images/projects/pluxscore/screenshots/02.png";
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
    images: [
      {
        src: PluxScoreImage01,
        width: 319,
        height: 567,
      },
      {
        src: PluxScoreImage02,
        width: 319,
        height: 567,
      },
    ],
  },
  {
    title: "Mochi",
    link: "https://sadiqsalau.github.io/mochi",
    repo: "https://github.com/sadiqsalau/mochi",
    icon: MochiIcon,
    position: "Open-Source",
    technologies: [SiReact, SiJavascript, SiTailwindcss],
    description: "ReactJs Chat Template",
    images: [],
  },
];
