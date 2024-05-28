import Link from "next/link";
import { Icon, IconName } from "@/components/icon";

export type ContactItem = {
  label: string;
  icon: IconName;
  link: string;
};

export type Props = React.ComponentProps<"li"> & ContactItem;

export const ContactItem = (props: Props) => {
  const { label, icon, link, ...rest } = props;

  return (
    <li {...rest}>
      <Link
        href={link}
        target="_blank"
        className="flex transition-colors duration-300 text-black hover:text-gray-500"
      >
        <Icon name={icon} size="5" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};
