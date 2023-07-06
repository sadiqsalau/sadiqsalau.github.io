import clsx from "clsx";

export const Resume = () => (
  <div className="flex justify-center">
    <a
      download
      href="/resume.pdf"
      className={clsx(
        "rounded-md bg-green-500 text-green-900",
        "font-bold px-4 py-2",
        "hover:ring hover:ring-green-700"
      )}
    >
      Download Resume
    </a>
  </div>
);
