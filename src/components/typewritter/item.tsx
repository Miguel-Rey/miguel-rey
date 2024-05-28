"use client";

import React from "react";
import TypeIt, { TypeItProps } from "typeit-react";

export type TypewritterMessage = {
  text: string;
  delay?: number;
  correction?: string;
  extend?: string;
};

export type Props = TypewritterMessage & {
  active: boolean;
  onComplete: () => void;
};

export const TypewritterItem = (props: Props) => {
  const { text, active, onComplete, correction, extend } = props;
  const [instance, setInstance] = React.useState<TypeItProps>();

  React.useEffect(() => {
    if (!instance) return;

    if (active) {
      setTimeout(() => {
        instance.unfreeze();
      }, 500); // wait for slide fadeout before start typing
    } else {
      instance.freeze();
    }
  }, [active, instance]);

  return (
    <TypeIt
      className="text-4xl font-semibold"
      options={{
        speed: 50,
        lifeLike: true,
      }}
      getBeforeInit={(instance) => {
        if (correction) {
          instance
            .type(text)
            .pause(1500)
            .delete(correction.length)
            .pause(500)
            .type(correction)
            .pause(150)
            .type(" 😅")
            .exec(onComplete);
        } else if (extend) {
          instance.type(text).pause(1250).type(extend).exec(onComplete);
        } else {
          instance.type(text).exec(onComplete);
        }

        return instance;
      }}
      getAfterInit={(instance) => {
        setInstance(instance as unknown as TypeItProps); // fixes typeit instance type not being exported
        return instance;
      }}
    />
  );
};
