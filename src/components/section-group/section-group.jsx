import clsx from "clsx";

export const SectionGroup = (props) => (
  <div className={clsx(props.className, "flex flex-col gap-5")}>
    {props.children}
  </div>
);
