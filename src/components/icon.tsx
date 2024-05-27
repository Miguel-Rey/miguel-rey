import Email from "@/icons/email.svg";
import Linkedin from "@/icons/linkedin.svg";
import Github from "@/icons/github.svg";
import { cx } from "@/utils";

const icons = {
  email: Email,
  linkedin: Linkedin,
  github: Github,
} as const;

const sizes = {
  "4": "w-4 h-4",
  "5": "w-5 h-5",
  "6": "w-6 h-6",
  "8": "w-8 h-8",
  "12": "w-12 h-12",
  "16": "w-16 h-16",
} as const;

export type IconName = keyof typeof icons;
export type IconSize = keyof typeof sizes;

type Props = {
  name: IconName;
  size?: IconSize;
};

export function Icon(props: Props & React.ComponentPropsWithRef<"span">) {
  const { name, size = "8", ...rest } = props;

  const Component = icons[name];

  if (!Component) {
    return null;
  }

  return (
    <span
      className={cx([
        "shrink-0 inline-flex items-center justify-center [> svg]:size-full",
        sizes[size],
        rest.className,
      ])}
      {...rest}
    >
      <Component />
    </span>
  );
}
