import { cx } from "@/utils/cva";
import {
  ContactItem,
  Props as ContactItemProps,
} from "@/components/contact/item";

type Props = {
  items: ContactItemProps[];
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
