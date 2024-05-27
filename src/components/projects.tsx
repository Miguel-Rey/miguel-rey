import { Slide, Slider } from "@/components/slider";
import MeliaImage from "@/assets/melia.png";
import OusterImage from "@/assets/ouster.png";
import AmadeeImage from "@/assets/amadee.png";
import IkeaImage from "@/assets/ikea.png";
import YearsOfCultureImage from "@/assets/years-of-culture.jpeg";
import PstImage from "@/assets/pst.png";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Amadee",
    link: "https://amadee20.com",
    image: AmadeeImage,
  },
  {
    title: "Ikea Comunidad Family",
    link: "https://thefwa.com/cases/ikea-comunidad-family",
    image: IkeaImage,
  },
  {
    title: "Melia",
    link: "https://www.melia.com",
    image: MeliaImage,
  },
  {
    title: "Ouster",
    link: "https://ouster.com",
    image: OusterImage,
  },
  {
    title: "Years of Culture",
    link: "https://yearsofculture.qa/",
    image: YearsOfCultureImage,
  },
  {
    title: "PST art",
    link: "https://pst.art/en/exhibitions",
    image: PstImage,
  },
  {
    title: "Squared Circles",
    link: "https://squaredcircles.com",
    image: PstImage,
  },
];

export const Projects = () => {
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
      {PROJECTS.map((project, index) => (
        <Slide
          key={index}
          className="overflow-hidden hover:scale-[0.98] transition-transform duration-[700ms] ease-in-out rounded-sm w-1/2 lg:w-[47%] xl:w-[49%]"
        >
          <Link href={project.link} target="_blank" className="relative group">
            <div className="absolute left-0 bottom-0 z-10 p-4 w-full transition-opacity duration-200 delay-[300ms] opacity-0 group-hover:opacity-100">
              <h2 className="text-white text-xl">{project.title}</h2>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              className="aspect-square bg-gray-200 object-cover group-hover:scale-[1.06] transition-transform duration-[700ms] ease-in-out max-h-[600px] lg:aspect-[1.2] xl:aspect-video w-full"
            />
          </Link>
        </Slide>
      ))}
    </Slider>
  );
};
