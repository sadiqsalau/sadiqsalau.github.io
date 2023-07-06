import "yet-another-react-lightbox/styles.css";

import clsx from "clsx";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { SiGit } from "react-icons/si";
import { BsBoxArrowInUpRight } from "react-icons/bs";

export const ProjectModalHeader = ({ project, closeModal }) => (
  <div className="flex gap-2">
    {/* Icon */}
    <img
      src={project.icon}
      alt={project.title}
      className="w-10 h-10 rounded-lg flex-none"
    />

    {/* Details */}
    <div className="flex-1 flex flex-col gap-1.5">
      <Dialog.Title as="h3" className="text-lg font-fredoka-one">
        {project.title}
      </Dialog.Title>

      {/* Technologies */}
      <ul className="flex gap-2 flex-wrap">
        {project.technologies.map((Icon, i) => (
          <li key={i}>
            <Icon className="text-stone-400" />
          </li>
        ))}
      </ul>

      {/* Description */}
      <Dialog.Description className="text-sm">
        {project.description}
      </Dialog.Description>

      {/* Tags */}
      <ul className="flex gap-1 flex-wrap">
        {project.tags.map((tag, i) => (
          <li
            key={i}
            className="bg-stone-700 text-sm px-2 rounded-full self-start"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-2">
        {/* Visit link */}
        <a
          target="_blank"
          href={project.link}
          className={clsx(
            "flex gap-2",
            "rounded-lg bg-green-500 text-green-900",
            "font-bold px-4 py-1 outline-0 rounded-lg",
            "hover:ring hover:ring-green-700",
            "focus:ring focus:ring-green-700",
            "border border-green-500"
          )}
        >
          <BsBoxArrowInUpRight className="w-6 h-6" /> Visit Page
        </a>

        {/* Repo */}
        {project.repo ? (
          <a
            target="_blank"
            href={project.repo}
            className={clsx(
              "flex gap-2",
              "bg-[#f34f29]",
              "font-bold px-4 py-1 outline-0 rounded-lg",
              "hover:ring hover:ring-[#c23f21]",
              "focus:ring focus:ring-[#c23f21]"
            )}
          >
            <SiGit className="w-6 h-6" /> Repository
          </a>
        ) : null}
      </div>
    </div>

    {/* Close button */}
    <button
      onClick={closeModal}
      className={clsx(
        "self-start outline-0 rounded-lg focus:ring focus:ring-green-700"
      )}
    >
      <FaTimes className="w-6 h-6" />
    </button>
  </div>
);
