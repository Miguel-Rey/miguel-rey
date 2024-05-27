"use client";

import { Shape, Slide, Slider } from "@/components/slider";
import React from "react";
import TypeIt, { TypeItProps } from "typeit-react";

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

type Props = {
  text: string;
  active: boolean;
  onComplete: () => void;
};

export const TypewritterItem = (props: Props) => {
  const { text, active, onComplete } = props;
  const [instance, setInstance] = React.useState<TypeItProps>();

  React.useEffect(() => {
    if (!instance) return;

    if (active) {
      instance.unfreeze();
    } else {
      instance.freeze();
    }
  }, [active, instance]);

  return (
    <TypeIt
      className="text-4xl font-semibold"
      getBeforeInit={(instance) => {
        instance.type(text).exec(onComplete);
        return instance;
      }}
      getAfterInit={(instance) => {
        setInstance(instance as unknown as TypeItProps);
        return instance;
      }}
    />
  );
};

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
