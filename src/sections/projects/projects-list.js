import MochiIcon from "@/assets/images/projects/mochi/icon.png";
import MochiImage01 from "@/assets/images/projects/mochi/screenshots/01.png";
import MochiImage02 from "@/assets/images/projects/mochi/screenshots/02.png";
import MochiImage03 from "@/assets/images/projects/mochi/screenshots/03.png";
import MochiImage04 from "@/assets/images/projects/mochi/screenshots/04.png";
import MochiImage05 from "@/assets/images/projects/mochi/screenshots/05.png";
import PluxScoreIcon from "@/assets/images/projects/pluxscore/icon.png";
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
    images: [
      {
        src: MochiImage01,
        width: 319,
        height: 567,
      },
      {
        src: MochiImage02,
        width: 319,
        height: 567,
      },
      {
        src: MochiImage03,
        width: 319,
        height: 567,
      },
      {
        src: MochiImage04,
        width: 750,
        height: 1334,
      },
      {
        src: MochiImage05,
        width: 1366,
        height: 656,
      },
    ],
  },
];
