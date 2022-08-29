// COMPONENTS
import { Icon } from "../Icon";

interface IHeaderButton {
  variant: "primary" | "secondary";
}
const animationStyles = "transform ease-out duration-100 cursor-pointer";
const HeaderButton = ({ variant }: IHeaderButton) => (
  <div
    className={`w-14 aspect-square flex justify-center items-center rounded-full last-of-type:mx-4 cursor-pointer ${animationStyles} ${
      variant === "primary"
        ? "bg-yellow-400 hover:bg-opacity-80"
        : "bg-neutral-200 hover:bg-opacity-80"
    }`}
  >
    <Icon
      name={variant === "primary" ? "add" : "notification"}
      size={30}
      className={variant === "primary" ? "!text-slate-800" : ""}
    />
  </div>
);

export default HeaderButton;
