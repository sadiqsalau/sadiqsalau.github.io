export const ProjectTechnologies = ({ project }) => (
  <ul className="flex gap-2 flex-wrap">
    {project.technologies.map((Icon, i) => (
      <li key={i}>
        <Icon className="text-stone-400" />
      </li>
    ))}
  </ul>
);
