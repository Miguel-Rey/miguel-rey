import Link from "next/link";
import { Icon, IconName } from "@/components/icon";
import { cx } from "@/utils";

export type ContactItem = {
  label: string;
  icon: IconName;
  link: string;
};

type ContactItemProps = React.ComponentProps<"li"> & ContactItem;

const ContactItem = (props: ContactItemProps) => {
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
type Props = {
  items: ContactItem[];
};

export const Contact = (props: Props) => {
  const { items } = props;

  if (!items.length) return null;

  return (
    <nav className="px-6 lg:px-12">
      <ul className="flex items-center gap-4">
        {items.map((item, index) => (
          <ContactItem
            key={index}
            {...item}
            className={cx({
              "translate-y-[0.125rem]": item.label === "Email", // visual correction of email icon
            })}
          />
        ))}
      </ul>
    </nav>
  );
};
