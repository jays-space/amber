import { ReactNode } from "react";

/**
 * @param children: string content
 * @param strong: determines strong class
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
    data-testid="paragraph"
      className={`tracking-wide  ${
        strong ? "text-cyan-900 font-semibold" : "text-slate-700"
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
