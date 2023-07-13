export default Object.values(
  import.meta.glob("./*/index.js", {
    eager: true,
    import: "default"
  })
);
