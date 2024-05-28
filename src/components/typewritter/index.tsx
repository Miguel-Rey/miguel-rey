"use client";

import React from "react";
import { Shape, Slide, Slider } from "@/components/slider";
import {
  TypewritterItem,
  TypewritterMessage,
} from "@/components/typewritter/item";

type Props = {
  messages: TypewritterMessage[];
};

export const Typewritter = (props: Props) => {
  const { messages } = props;

  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = React.useRef<Shape>(null);

  if (messages.length === 0) {
    return null;
  }

  return (
    <Slider
      ref={sliderRef}
      options={{
        type: "fade",
        pagination: false,
        arrows: false,
        autoHeight: true,
      }}
      onMove={(splide) =>
        setActiveSlide(splide.Components.Controller.getIndex())
      }
    >
      {messages.map((message, index) => (
        <Slide key={index}>
          <TypewritterItem
            {...message}
            active={index === activeSlide}
            onComplete={() => {
              setTimeout(() => {
                sliderRef.current?.go(">");
              }, message.delay);
            }}
          />
        </Slide>
      ))}
    </Slider>
  );
};
