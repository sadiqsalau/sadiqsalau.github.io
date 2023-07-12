import clsx from "clsx";

export const MainArea = (props) => (
  <div className="bg-stone-900">
    <div className="container max-w-5xl p-4 mx-auto">
      <div className={clsx(
          "grid gap-5 items-start",
          "grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_theme(spacing.72)]"
        )}>
        {props.children}
      </div>
    </div>
  </div>
);
