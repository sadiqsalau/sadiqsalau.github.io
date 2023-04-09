export const projectsList = Object.values(
  import.meta.glob("@/projects/*/index.js", {
    import: "project",
  })
);
