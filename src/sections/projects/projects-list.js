export const projectsList = Object.values(
  import.meta.glob("@/projects/*/project.js", {
    eager: true,
    import: "project",
  })
);
