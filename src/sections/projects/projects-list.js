export const projectsList = Object.values(
  import.meta.glob("@/projects/*/index.js", {
    eager: true,
    import: "project",
  })
);
