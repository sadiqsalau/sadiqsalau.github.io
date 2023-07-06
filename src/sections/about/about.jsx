import { SectionHeading } from "@/components/section-heading/section-heading";

export const About = () => (
  <div className="flex flex-col gap-2">
    <SectionHeading>About Me</SectionHeading>

    <div className="space-y-2">
      <p className="p-4 rounded-md bg-stone-800">
        I am a fullstack developer with a passion for coding and problem
        solving. I have experience working with a variety of languages,
        frameworks, and databases, and I am constantly looking for ways to
        expand my knowledge.
      </p>

      <p className="p-4 rounded-md bg-stone-800">
        I take pride in my ability to develop creative solutions to complex
        challenges, and I am driven to create applications that are both
        efficient and user-friendly. I am a team player, and I work well with
        others to ensure that projects are completed on time and to the highest
        standards.
      </p>
    </div>
  </div>
);
