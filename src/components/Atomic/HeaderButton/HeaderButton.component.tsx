// COMPONENTS
import { Icon } from "../Icon";

interface IHeaderButton {
  variant: "primary" | "secondary";
}

/**
 * @param variant -> type of button to return
 *
 * @returns icon header button dependant on variant
 */

const animationStyles = "transform ease-out duration-100 cursor-pointer";
const HeaderButton = ({ variant }: IHeaderButton) => (
  <button
    data-testid={`header-button-${variant}`}
    className={`w-10 lg:w-14 aspect-square flex justify-center items-center rounded-full last-of-type:mx-4 cursor-pointer ${animationStyles} ${
      variant === "primary"
        ? "bg-yellow-400 hover:bg-opacity-80"
        : "bg-neutral-200 hover:bg-opacity-80"
    }`}
  >
    <Icon
      name={variant === "primary" ? "add" : "notification"}
      size={28}
      className={variant === "primary" ? "!text-slate-800" : ""}
    />
  </button>
);

export default HeaderButton;
