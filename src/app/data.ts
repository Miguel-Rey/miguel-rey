import { type Props as ContactItem } from "@/components/contact/item";
import { type Props as Project } from "@/components/projects/card";

import MeliaImage from "@/images/melia.jpg";
import OusterImage from "@/images/ouster.jpg";
import AmadeeImage from "@/images/amadee.jpg";
import IkeaImage from "@/images/ikea.jpg";
import YearsOfCultureImage from "@/images/years-of-culture.jpg";
import SquaredCircleImage from "@/images/squared-circles.jpg";
import PstImage from "@/images/pst.jpg";
import SaffronImage from "@/images/saffron.jpg";

const projects: Project[] = [
  {
    title: "Ouster",
    link: "https://ouster.com",
    image: OusterImage,
  },
  {
    title: "Melia",
    link: "https://www.melia.com",
    image: MeliaImage,
  },
  {
    title: "Saffron",
    link: "https://saffron-consultants.com/",
    image: SaffronImage,
  },
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
    image: SquaredCircleImage,
  },
];

const contact: ContactItem[] = [
  {
    label: "Email",
    icon: "email",
    link: "mailto:miguelreymallen@gmail.com",
  },
  {
    label: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/miguelreymallen",
  },
  {
    label: "Github",
    icon: "github",
    link: "https://github.com/Miguel-Rey",
  },
];

const data = {
  projects,
  contact,
};

export default data;
