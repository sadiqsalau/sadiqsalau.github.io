export const MainArea = (props) => (
  <div className="bg-stone-900">
    <div className="container max-w-5xl p-4 mx-auto">
      <div className="grid gap-5 sm:grid-cols-[1fr_theme(spacing.72)]">
        {props.children}
      </div>
    </div>
  </div>
);
