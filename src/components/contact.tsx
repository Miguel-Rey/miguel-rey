import Link from "next/link";
import { Icon, IconName } from "@/components/icon";

type ContactItemProps = React.ComponentProps<"li"> & {
  text: string;
  icon: IconName;
  link: string;
};

const ContactItem = (props: ContactItemProps) => {
  const { text, icon, link, ...rest } = props;

  return (
    <li {...rest}>
      <Link
        href={link}
        target="_blank"
        className="flex transition-colors duration-300 text-black hover:text-gray-500"
      >
        <Icon name={icon} size="5" />
        <span className="sr-only">{text}</span>
      </Link>
    </li>
  );
};

export const Contact = () => {
  return (
    <nav className="px-6 lg:px-12">
      <ul className="flex items-center gap-4">
        <ContactItem
          text="Email"
          icon="email"
          link="mailto:miguelreymallen@gmail.com"
          className="translate-y-[0.125rem]"
        />
        <ContactItem
          text="Linkedin"
          icon="linkedin"
          link="https://www.linkedin.com/in/miguelreymallen"
        />
        <ContactItem
          text="Github"
          icon="github"
          link="https://github.com/Miguel-Rey"
        />
      </ul>
    </nav>
  );
};
