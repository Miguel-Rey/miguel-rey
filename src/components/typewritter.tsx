"use client";

import { Shape, Slide, Slider } from "@/components/slider";
import React from "react";
import TypeIt, { TypeItProps } from "typeit-react";

const MESSAGES = [
  {
    text: "Hey 👋",
  },
  {
    text: "I'm Miguel, a developer based in Madrid.",
  },
  {
    text: "I love creating digital products. With a focus on detail",
  },
  {
    text: "Check some of my projects below!",
  },
  {
    text: "Or say hi",
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
