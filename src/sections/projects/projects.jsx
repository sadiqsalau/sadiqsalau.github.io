import clsx from "clsx";
import { Fragment } from "react";
import { Project } from "@/components/project/project";
import { ProjectPlaceholder } from "@/components/project/project-placeholder";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { repeatComponent } from "repeat-component";

import { useProjectsQuery } from "./use-projects-query";

export const Projects = () => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProjectsQuery();

  return (
    <div className="flex flex-col gap-2">
      <SectionHeading>Projects</SectionHeading>
      <p className="p-4 rounded-lg bg-stone-800">
        As a React and Laravel web developer, I have completed several projects
        that showcase my expertise in these technologies.
      </p>
      <div
        className={clsx(
          "grid gap-3",
          "grid-cols-[repeat(auto-fill,minmax(theme(spacing.60),1fr))]"
        )}
      >
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.projects.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </Fragment>
        ))}
        {isLoading || isFetchingNextPage
          ? repeatComponent(<ProjectPlaceholder />, 2)
          : null}
      </div>

      {hasNextPage && !isFetchingNextPage ? (
        <button
          className={clsx(
            "self-center mt-3",
            "rounded-lg bg-green-500 text-green-900",
            "font-bold px-4 py-1.5",
            "hover:ring hover:ring-green-700"
          )}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
};
