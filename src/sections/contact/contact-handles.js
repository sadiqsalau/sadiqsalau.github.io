import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import { SiUpwork } from "react-icons/si";

export const contactHandles = [
  {
    icon: FaEnvelope,
    href: "mailto:sadiqsalau888@gmail",
    content: "sadiqsalau888@gmail.com",
  },
  {
    icon: FaPhone,
    href: "tel:+2349018646163",
    content: "+234-901-864-616-3",
  },
  {
    icon: FaGithub,
    href: "https://github.com/sadiqsalau",
    content: "@sadiqsalau",
    target: "_blank",
    title: "My awesome list of repositories",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sadiqsalau",
    content: "@sadiqsalau",
    target: "_blank",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/thesadiqsalau",
    content: "@thesadiqsalau",
    target: "_blank",
  },
  {
    icon: SiUpwork,
    href: "https://www.upwork.com/freelancers/sadiqsalau",
    content: "Hire Me!",
    target: "_blank",
  },
];
