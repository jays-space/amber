// COMPONENTS
import { Text } from "../../Atomic/Typography/Text";

interface IDetail {
  label: string;
  content: string[];
  lowercase?: boolean;
  className?: string;
}

const Detail = ({
  label,
  content,
  lowercase = false,
  className = "",
}: IDetail) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Text className={`mb-2 text-xs capitalize`}>{label}</Text>
      <span className="flex">
        {content.map((content, idx) => (
          <Text
            key={idx}
            className={` font-semibold mr-2 last-of-type:mr-0 ${
              !lowercase && "capitalize !text-sm !md:text-base"
            }`}
          >
            {content}
          </Text>
        ))}
      </span>
    </div>
  );
};

export default Detail;
