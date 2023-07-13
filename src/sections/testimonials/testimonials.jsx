import clsx from "clsx";
import Slider from "react-slick";
import { forwardRef } from "react";

import { SectionHeading } from "@/components/section-heading/section-heading";


import testimonialsData from "@/resources/testimonials";




const sliderSettings = {
  dots: true,
  dotsClass: "!flex justify-center gap-2",
  customPaging: () => <SliderDot />,

  arrows: false,

  autoplay: true,
  autoplaySpeed: 10000,

  infinite: true,
  focusOnSelect: true,
  speed: 500,
  
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  
  responsive: [
    {
      breakpoint: 928,
      settings: {
        centerMode: true,
        centerPadding: "15px",

        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
};


const SliderDot = forwardRef((props, ref) => (
  <a
    {...props}
    ref={ref}
    role="button"
    className={clsx(
      "inline-block h-2 w-5 rounded-full",
      "bg-stone-700",
      "[.slick-active_>_&]:bg-green-500"
    )}
  ></a>
));


export const Testimonials = () => {
  
  return (
    <div className="min-w-0 w-full flex flex-col gap-2">
      <SectionHeading>Testimonials</SectionHeading>
      <p className="p-4 rounded-md bg-stone-800">
        Testimonials are an important tool for any business or individual, as they provide social proof and help potential clients or employers understand the value of your work.
      </p>
      <p className="p-4 rounded-md bg-stone-800">In this section, you'll find a variety of testimonials that highlight my skills, work ethic, and professionalism. I hope these testimonials give you a better sense of what it's like to work with me and the kind of results I can deliver.</p>

      <div className="-m-1 py-2">
        <Slider
          {...sliderSettings}
        >
          {testimonialsData.map((testimonial, i)=>(
            <div key={i}>
              <div className="p-1 flex flex-col items-center gap-2">
                <div className={clsx(
                  "p-4 rounded-md bg-stone-800",
                  "flex flex-col gap-2 items-center",
                  "border border-transparent",
                  "[.slick-current_&]:border-green-500"
                )}>
                  {/* Message */}
                  <div className="text-center">
                    <q>{testimonial.message}</q>
                  </div>

                  {/* Position and Company */}
                  <div className="bg-stone-700 text-sm px-2 rounded-full text-stone-300">
                    {testimonial.position} &bull; {testimonial.company}
                  </div>

                  {/* Name */}
                  <h4 className="text-center font-fredoka-one text-green-500">{testimonial.name}</h4>
                </div>

                {/* Photo */}
                <img src={testimonial.photo} className="w-14 h-14 rounded-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}