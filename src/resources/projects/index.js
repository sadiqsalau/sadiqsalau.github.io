const projects = [
  "pluxscore",
  "twelvesquares",
  "kazeemtanimu",
  "emmanjoku",
  "kanakfoodglobal",
  "hedgromimcs",
  "laravel-otp",
  "mochi",
  "tailwindcss-svg-background",
];

export default Object.values(
  import.meta.glob("./*/index.js", {
    eager: true,
    import: "default",
  })
).sort((a, b) => projects.indexOf(a.id) - projects.indexOf(b.id));
