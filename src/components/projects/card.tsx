import React from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Slide } from "@/components/slider";
import { cx } from "@/utils/cva";

export type Props = {
  title: string;
  link: string;
  image: StaticImageData;
};

export const ProjectCard = (props: Props) => {
  const { link, title, image } = props;

  return (
    <Slide
      className={cx([
        "overflow-hidden rounded-sm w-full lg:w-[47%] xl:w-[49%]",
        "transition-transform duration-[700ms] ease-in-out",
        "hover:scale-[0.98]",
      ])}
    >
      <Link href={link} target="_blank" className={cx(["relative group"])}>
        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-20 lg:opacity-0 group-hover:opacity-20 z-10 pointer-events-none" />
        <div
          className={cx([
            "absolute left-0 bottom-0 z-10 p-4 w-full",
            "transition-opacity duration-200 delay-[300ms] ease-in-out",
            "group-hover:opacity-100 group-focus:opacity-100 lg:opacity-0",
          ])}
        >
          <h2 className="text-white text-xl">{title}</h2>
        </div>
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className={cx([
            "w-full max-h-[600px] bg-gray-200 object-cover",
            "aspect-square lg:aspect-[1.2] xl:aspect-video",
            "transition-transform duration-[700ms] ease-in-out",
            "group-focus:scale-[1.06] group-hover:scale-[1.06] ",
          ])}
        />
      </Link>
    </Slide>
  );
};
