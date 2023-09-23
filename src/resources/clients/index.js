export default Object.values(
  import.meta.glob("./*", {
    eager: true,
    query: {
      metadata: "",
      format: "webp",
      withoutEnlargement: "",
      h: 60,
    },
  })
);
