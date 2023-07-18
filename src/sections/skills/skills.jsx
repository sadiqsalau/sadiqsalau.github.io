import clsx from "clsx";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { 
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact, 
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit
} from "react-icons/si";

const list = [
  {
    title: "HTML",
    icon: SiHtml5,
    tag: "Structure"
  },
  {
    title: "CSS",
    icon: SiCss3,
    tag: "Styling"
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
    tag: "Utility Classes"
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
    tag: "Responsiveness"
  },
  {
    title: "Javascript",
    icon: SiJavascript,
    tag: "Interactivity"
  },
  {
    title: "React",
    icon: SiReact,
    tag: "Components"
  },
  {
    title: "PHP",
    icon: SiPhp,
    tag: "Server-Side"
  },
  {
    title: "Laravel",
    icon: SiLaravel,
    tag: "Backend"
  },
  {
    title: "MySQL",
    icon: SiMysql,
    tag: "Database"
  },
  {
    title: "Git",
    icon: SiGit,
    tag: "Version Control"
  }
];

export const Skills = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>Skills</SectionHeading>
    <p className="p-4 rounded-md bg-stone-800"> 
      I'm excited to showcase the skills that make me a passionate and versatile developer.
      My journey in the world of web development has been an exciting one, and I've honed my abilities to create awesome, user-friendly, and efficient applications.
      Here's a glimpse of the skills I bring to the table:
    </p>
    
    <div className={clsx(
      "grid gap-2",
      "grid-cols-[repeat(auto-fill,_minmax(theme(spacing.28),_1fr))]"
      )}>
      {list.map(({title, tag, icon: Icon}, i)=>(
          <div key={i} className={clsx(
            "group",
            "flex flex-col min-w-0",
            "items-center justify-center",
            "bg-stone-800 rounded-lg",
            "border border-transparent",
            "hover:border-green-500",
            "px-2 py-4 gap-2"
          )}
          title={`${title} - ${tag}`}
          >
            <Icon className="w-14 h-14 text-green-500" />
            <h3 className="font-fredoka-one text-stone-300">{title}</h3>
            <div className="min-w-0 w-full flex justify-center">
              <span className={clsx(
                "bg-stone-700",
                "text-sm text-stone-300 truncate",
                "px-2 rounded-full"
              )}>{tag}</span>
            </div>
          </div>
      ))}
    </div>
  </div>
);
