"use client";

import React from "react";
import { Shape, Slide, Slider } from "@/components/slider";
import { TypewritterItem } from "@/components/typewritter/item";

const MESSAGES = [
  {
    text: "Hey 👋",
  },
  {
    text: "I'm Miguel, a developer based in Madrid.",
  },
  {
    text: "I love creating digital products, with a focus on detail",
  },
  {
    text: "Check some of my projects below!",
  },
  {
    text: "Or say hi",
  },
];

export const Typewritter = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = React.useRef<Shape>(null);

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
      {MESSAGES.map((message, index) => (
        <Slide key={index}>
          <TypewritterItem
            text={message.text}
            active={index === activeSlide}
            onComplete={() => {
              setTimeout(() => {
                sliderRef.current?.go(">");
              }, 2000);
            }}
          />
        </Slide>
      ))}
    </Slider>
  );
};
