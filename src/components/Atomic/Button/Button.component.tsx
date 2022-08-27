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
        <div
          onClick={onClick}
          className={`${baseStyles} !p-2 bg-slate-500  active:bg-slate-600`}
        >
          <Icon name={icon} className="!text-white" size={24} />
        </div>
      );

    case "icon-light":
      return (
        <div
          onClick={onClick}
          className={`${baseStyles} !p-2 bg-white hover:bg-slate-50 active:bg-slate-200`}
        >
          <Icon name={icon} className="text-slate-700" size={24} />
        </div>
      );

    case "secondary":
      return (
        <div
          onClick={onClick}
          className={`${baseStyles} !py-1.5 text-cyan-800 border-2 border-cyan-800 border-opacity-75  active:border-cyan-900`}
        >
          <Icon name={icon} className="mr-2 text-cyan-800" />
          {label}
        </div>
      );

    case "primary":
    default:
      return (
        <div
          onClick={onClick}
          className={`${baseStyles} bg-yellow-400 active:bg-yellow-600`}
        >
          <Icon name={icon} className="mr-2 !text-slate-700" />
          {label}
        </div>
      );
  }
};

export default Button;
