// TYPES
import { IconNamesType } from "../../../types/types";

// COMPONENTS
import { Icon } from "../Icon";

interface IButton {
  variant: "primary" | "secondary" | "icon-light" | "icon-dark";
  label?: string;
  icon?: IconNamesType;
  onClick?: () => void;
}

/**
 * Button component
 *
 * @param variant -> type of button to return, "primary" by default
 * @param label (optional) -> the text content of the button, "add label" by default
 * @param icon (optional) -> name of icon to pass into Icon component
 * @param onClick (optional) -> function to be executed on button click
 *
 * @returns a custom button component
 */

const Button = ({
  variant = "primary",
  label = "add label",
  icon = undefined,
  onClick = () => {},
}: IButton) => {
  const baseStyles = `flex flex-row justify-center items-center mx-2 last-of-type:mr-0 py-2 px-6 text-slate-800 text-base font-bold tracking-widest rounded-md capitalize cursor-pointer hover:bg-opacity-75 transform ease-out duration-100`;

  switch (variant) {
    case "icon-dark":
      return (
        <button
          onClick={onClick}
          data-testid="button-icon-dark"
          className={`${baseStyles} w-11 aspect-square !p-2 bg-slate-500  active:bg-slate-600`}
        >
          <Icon name={icon} className="!text-white" size={24} />
        </button>
      );

    case "icon-light":
      return (
        <button
          onClick={onClick}
          data-testid="button-icon-light"
          className={`${baseStyles} w-11 aspect-square !p-2 bg-white hover:bg-slate-50 active:bg-slate-200`}
        >
          <Icon name={icon} className="text-slate-700" size={24} />
        </button>
      );

    case "secondary":
      return (
        <button
          onClick={onClick}
          data-testid="button-secondary"
          className={`${baseStyles} !py-1.5 text-cyan-800 border-2 border-cyan-800 border-opacity-75  active:border-cyan-900`}
        >
          <Icon name={icon} className="mr-2 !text-cyan-800" />
          {label}
        </button>
      );

    case "primary":
    default:
      return (
        <button
          onClick={onClick}
          data-testid="button-primary"
          className={`${baseStyles} bg-yellow-400 active:bg-yellow-600`}
        >
          <Icon name={icon} className="mr-2 !text-slate-700" />
          {label}
        </button>
      );
  }
};

export default Button;
