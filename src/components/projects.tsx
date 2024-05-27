"use client";

import { Shape, Slide, Slider } from "@/components/slider";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cx } from "@/utils";
import React from "react";
import { Icon } from "@/components/icon";

type Project = {
  title: string;
  link: string;
  image: StaticImageData;
};

type Props = {
  projects: Project[];
};

type ProjectButtonProps = React.ComponentProps<"button"> & {
  isNext?: boolean;
};

const ProjectButton = (props: ProjectButtonProps) => {
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
    </button>
  );
};

export const Projects = (props: Props) => {
  const { projects } = props;
  const sliderRef = React.useRef<Shape>(null);

  if (!projects.length) return null;

  return (
    <div className="relative">
      <div className="flex gap-4 self-end px-4 absolute top-0 right-0 pb-4 pr-14 -translate-y-full">
        <ProjectButton onClick={() => sliderRef.current?.go("<")} />
        <ProjectButton isNext onClick={() => sliderRef.current?.go(">")} />
      </div>

      <Slider
        ref={sliderRef}
        className="h-full"
        options={{
          overflow: "visible",
          autoWidth: true,
          gap: "1rem",
          padding: "2rem",
          drag: "free",
          mediaQuery: "min",
        }}
      >
        {projects.map((project, index) => (
          <Slide
            key={index}
            className={cx([
              "overflow-hidden rounded-sm w-1/2 lg:w-[47%] xl:w-[49%]",
              "hover:scale-[0.98] transition-transform duration-[700ms] ease-in-out",
              "hover:scale-[0.98] focus-within:scale-[0.98]",
            ])}
          >
            <Link
              href={project.link}
              target="_blank"
              className={cx(["relative group"])}
            >
              <div
                className={cx([
                  "absolute left-0 bottom-0 z-10 p-4 w-full",
                  "transition-opacity duration-200 delay-[300ms] ease-in-out",
                  "opacity-0 group-hover:opacity-100 group-focus:opacity-100",
                ])}
              >
                <h2 className="text-white text-xl">{project.title}</h2>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                className={cx([
                  "w-full max-h-[600px] bg-gray-200 object-cover",
                  "aspect-square lg:aspect-[1.2] xl:aspect-video",
                  "transition-transform duration-[700ms] ease-in-out",
                  "group-focus:scale-[1.06] group-hover:scale-[1.06] ",
                ])}
              />
            </Link>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};
