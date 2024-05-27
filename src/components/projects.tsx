import { Slide, Slider } from "@/components/slider";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cx } from "@/utils";

type Project = {
  title: string;
  link: string;
  image: StaticImageData;
};

type Props = {
  projects: Project[];
};

export const Projects = (props: Props) => {
  const { projects } = props;

  if (!projects.length) return null;

  return (
    <Slider
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
          ])}
        >
          <Link href={project.link} target="_blank" className="relative group">
            <div
              className={cx([
                "absolute left-0 bottom-0 z-10 p-4 w-full",
                "transition-opacity duration-200 delay-[300ms] opacity-0 group-hover:opacity-100",
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
                "group-hover:scale-[1.06] transition-transform duration-[700ms] ease-in-out",
              ])}
            />
          </Link>
        </Slide>
      ))}
    </Slider>
  );
};
