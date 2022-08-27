import { ReactNode } from "react";

/**
 * @param content: string content
 * @param className (optional): additional classes to be added
 *
 * @returns paragraph element with string content
 */

interface IText {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: IText) => {
  return <p className={`tracking-wide text-slate-700 ${className}`}>{children}</p>;
};

export default Text;
