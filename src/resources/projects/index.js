const projects = [
  "pluxscore",
  "twelvesquares",
  "kazeemtanimu",
  "emmanjoku",
  "kanakfoodglobal",
  "hedgromimcs",
];

export default Object.values(
  import.meta.glob("./*/index.js", {
    eager: true,
    import: "default",
  })
).sort((a, b) => projects.indexOf(a.id) - projects.indexOf(b.id));
