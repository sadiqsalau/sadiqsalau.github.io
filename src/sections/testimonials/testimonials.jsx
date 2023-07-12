import clsx from "clsx";
import Slider from "react-slick";

import { SectionHeading } from "@/components/section-heading/section-heading";


import { testimonialsData } from "./testimonials-data";


const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 928,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
};
export const Testimonials = () => (
  <div className="min-w-0 w-full gap-2">
    <SectionHeading>Testimonials</SectionHeading>
    <div>
      <Slider
        {...sliderSettings}
      >
        {testimonialsData.map((testimonial, i)=>(
          <div key={i} className={clsx(
            "p-4 rounded-md bg-stone-800",
            "flex flex-col gap-2 items-center"
          )}>
            <div className="text-center">
              {testimonial.message}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);