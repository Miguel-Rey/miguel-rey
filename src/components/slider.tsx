"use client";

import React from "react";
import { Splide, SplideSlide, type SplideProps } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export type Shape = Splide;
export type Props = SplideProps;

const Slider = React.forwardRef<Shape, Props>((props, ref) => {
  const { children, options = {}, ...rest } = props;

  return (
    <Splide
      ref={ref}
      options={{
        pagination: false,
        arrows: false,
        ...options,
      }}
      {...rest}
    >
      {children}
    </Splide>
  );
});

const Slide = SplideSlide;
export { Slider, Slide };
