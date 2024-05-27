import Email from "@/icons/email.svg";
import Linkedin from "@/icons/linkedin.svg";
import Github from "@/icons/github.svg";
import ArrowRight from "@/icons/arrow-right.svg";
import { cx } from "@/utils";

const icons = {
  email: Email,
  linkedin: Linkedin,
  github: Github,
  "arrow-right": ArrowRight,
} as const;

const sizes = {
  "4": "size-4",
  "5": "size-5",
  "6": "size-6",
  "8": "size-8",
} as const;

export type IconName = keyof typeof icons;
export type IconSize = keyof typeof sizes;

type Props = {
  name: IconName;
  size?: IconSize;
};

export function Icon(props: Props & React.ComponentProps<"span">) {
  const { name, size = "4", ...rest } = props;

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
