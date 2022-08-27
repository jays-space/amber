import { BiFilterAlt } from "react-icons/bi";

/**
 * @param name: name of icon to return
 * @param size: icon size
 * @param className (optional): additional classes to be added
 *
 * @returns icon component depending on icon name
 */

interface IIcon {
  name: "filter";
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 24, className = "" }: IIcon) => {
  switch (name) {
    case "filter":
      return (
        <BiFilterAlt size={size} className={`text-slate-500 ${className}`} />
      );
  }
};

export default Icon;
