import { forwardRef } from "react";

export const SectionHeading = forwardRef((props, ref) => (
  <h3
    ref={ref}
    className="text-2xl text-green-400 font-fredoka-one p-2 text-center"
  >
    {props.children}
  </h3>
));
