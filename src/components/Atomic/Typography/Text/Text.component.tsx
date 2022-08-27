import { ReactNode } from "react";

/**
 * @param content: string content
 * @param className (optional): additional classes to be added
 *
 * @returns paragraph element with string content
 */

interface IText {
  children: ReactNode;
  strong?: boolean;
  className?: string;
}

const Text = ({ children, strong = false, className }: IText) => {
  return (
    <p
      className={`tracking-wide  ${
        strong ? "text-cyan-900 font-semibold" : "text-slate-700"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
