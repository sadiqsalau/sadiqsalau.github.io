export default Object.values(
  import.meta.glob("./images/*", {
    eager: true,
    import: "default",

    query: {
      as: "metadata",
      format: "webp",
      withoutEnlargement: "",
      h: 60,
    },
  })
);
