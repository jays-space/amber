/**
 * @param variant (optional): element type heading to return (default h1)
 * @param label: title of the heading
 * @param className (optional): additional classes to be added
 *
 * @returns heading element depending on the variant
 */

interface IHeading {
  variant?: "h1" | "h2" | "h3" | "h4";
  label: string;
  capitalize?: boolean;
  className?: string;
}

const Heading = ({ variant, label, capitalize, className = "" }: IHeading) => {
  const baseStyles = `text-neutral-700 ${capitalize}`;

  switch (variant) {
    case "h1":
      return (
        <h1 className={`${className} ${baseStyles} text-4xl font-semibold`}>
          {label}
        </h1>
      );

    case "h2":
      return (
        <h2 className={`${className} ${baseStyles} text-3xl font-semibold`}>
          {label}
        </h2>
      );

    case "h3":
      return (
        <h3 className={`${className} ${baseStyles} text-2xl font-bold`}>
          {label}
        </h3>
      );

    case "h4":
      return (
        <h4 className={`${className} ${baseStyles} text-xl font-bold`}>
          {label}
        </h4>
      );

    default:
      return (
        <h1 className={`${className} ${baseStyles} text-4xl font-semibold`}>
          {label}
        </h1>
      );
  }
};

export default Heading;
