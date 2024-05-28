"use client";

import React from "react";
import { Shape, Slider } from "@/components/slider";
import { ProjectButton } from "@/components/projects/button";
import { ProjectCard, type Props as Project } from "@/components/projects/card";

type Props = {
  projects: Project[];
};

export const Projects = (props: Props) => {
  const { projects } = props;
  const sliderRef = React.useRef<Shape>(null);

  if (!projects.length) return null;

  return (
    <div className="relative px-4 lg:px-0">
      <div className="hidden gap-4 self-end px-4 absolute top-0 right-0 pb-4 pr-14 -translate-y-full lg:flex">
        <ProjectButton onClick={() => sliderRef.current?.go("<")} />
        <ProjectButton isNext onClick={() => sliderRef.current?.go(">")} />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <Slider
        ref={sliderRef}
        className="h-full hidden lg:block"
        options={{
          overflow: "visible",
          autoWidth: true,
          gap: "1rem",
          padding: "1rem",
          drag: "free",
          mediaQuery: "min",
          breakpoints: {
            768: {
              padding: "2rem",
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Slider>
    </div>
  );
};
