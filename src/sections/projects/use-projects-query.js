import { projectsList } from "./projects-list";
import { useInfiniteQuery } from "@tanstack/react-query";

const PER_PAGE = 2;

const fetchProjects = (page) => {
  const startOffset = page;
  const endOffset = startOffset + PER_PAGE;

  return Promise.all(
    projectsList.slice(startOffset, endOffset).map((item) => item())
  ).then((projects) => ({
    projects,
    nextOffset: projectsList.length > endOffset ? endOffset : null,
  }));
};

export const useProjectsQuery = () =>
  useInfiniteQuery({
    queryKey: ["get_projects"],
    queryFn: ({ pageParam = 0 }) => fetchProjects(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextOffset,
  });
