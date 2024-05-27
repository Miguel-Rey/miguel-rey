"use client";

import { Typewritter } from "@/components/typewritter";
import { Slider, Slide, type Shape } from "@/components/slider";
import React from "react";

const MESSAGES = [
  {
    text: "Hey 👋",
    options: {
      speed: 50,
      deleteSpeed: 25,
      nextStringDelay: 3000,
      breakLines: false,
      lifeLike: false,
    },
  },
  {
    text: "I'm Miguel, a developer based in Madrid.",
    options: {
      speed: 50,
      deleteSpeed: 25,
      nextStringDelay: 3000,
      breakLines: false,
      lifeLike: false,
    },
  },
  {
    text: "I love creating digital products. With a focus on detail",
    options: {
      speed: 50,
      deleteSpeed: 25,
      nextStringDelay: 3000,
      breakLines: false,
      lifeLike: false,
    },
  },
  {
    text: "Check some of my projects below!",
    options: {
      speed: 50,
      deleteSpeed: 25,
      nextStringDelay: 3000,
      breakLines: false,
      lifeLike: false,
    },
  },
  {
    text: "Or say hi",
    options: {
      speed: 50,
      deleteSpeed: 25,
      nextStringDelay: 3000,
      breakLines: false,
      lifeLike: false,
    },
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = React.useRef<Shape>(null);

  return (
    <main className="min-h-screen">
      <Slider
        ref={sliderRef}
        onMove={(splide) =>
          setActiveSlide(splide.Components.Controller.getIndex())
        }
      >
        {MESSAGES.map((message, index) => (
          <Slide key={index}>
            <div className="h-screen flex flex-col items-center justify-center text-center">
              <Typewritter
                text={message.text}
                active={index === activeSlide}
                onComplete={() => {
                  setTimeout(() => {
                    sliderRef.current?.go(">");
                  }, 2000);
                }}
              />
            </div>
          </Slide>
        ))}
      </Slider>
    </main>
  );
}
