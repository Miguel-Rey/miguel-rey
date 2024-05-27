"use client";

import React from "react";
import TypeIt, { TypeItProps } from "typeit-react";

type Props = {
  text: string;
  active: boolean;
  onComplete: () => void;
};

export const Typewritter = (props: Props) => {
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
      getBeforeInit={(instance) => {
        instance.type(text).exec(onComplete);
        return instance;
      }}
      getAfterInit={(instance) => {
        setInstance(instance as unknown as TypeItProps);
        return instance;
      }}
      className="text-4xl font-semibold"
    />
  );
};
