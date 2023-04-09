import clsx from "clsx";

export const ProjectPlaceholder = () => (
  <div
    className={clsx(
      "bg-stone-800",
      "border border-transparent hover:border-green-500",
      "rounded-lg p-4",
      "flex flex-col gap-2"
    )}
  >
    <div className="flex gap-2.5">
      {/* Icon */}
      <span className="w-10 h-10 rounded-lg flex-none bg-stone-700" />
      {/* Details */}
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="w-3/5 p-1.5 rounded-lg bg-stone-700"></div>
        <div className="w-3/12 p-1.5 rounded-lg bg-stone-700"></div>
        <div className="w-4/5 p-1.5 rounded-lg bg-stone-700"></div>
      </div>
    </div>
  </div>
);
