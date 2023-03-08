export const Footer = () => (
  <footer className="p-4 flex justify-center">
    <p>
      <a
        target="_blank"
        className="underline"
        href={import.meta.env.VITE_APP_REPOSITORY}
      >
        Site
      </a>{" "}
      designed with 🥰️ from 🇳🇬 Nigeria
    </p>
  </footer>
);
