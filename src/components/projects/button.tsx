"use client";

import React from "react";
import { Icon } from "@/components/icon";
import { cx } from "@/utils/cva";

type Props = React.ComponentProps<"button"> & {
  isNext?: boolean;
};

export const ProjectButton = (props: Props) => {
  const { isNext, className, ...rest } = props;

  return (
    <button
      className={cx([
        "bg-black text-white py-2 px-4 rounded-full size-8 flex items-center justify-center",
        "transition-all duration-200 ease-in-out",
        "hover:scale-[1.05]",
        "disabled:opacity-70 disabled:pointer-events-none",
        className,
      ])}
      {...rest}
    >
      <Icon
        name="arrow-right"
        size="6"
        className={cx({
          "text-white": true,
          "rotate-0 translate-x-[0.0625rem]": isNext,
          "rotate-180 -translate-x-[0.0625rem]": !isNext,
        })}
      />

      <span className="sr-only">
        {isNext ? "next slide" : "previous slide"}
      </span>
    </button>
  );
};
