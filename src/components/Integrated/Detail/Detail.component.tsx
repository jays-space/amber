// COMPONENTS
import { Text } from "../../Atomic/Typography/Text";

interface IDetail {
  label: string;
  content: string[];
  lowercase?: boolean;
}

const Detail = ({ label, content, lowercase = false }: IDetail) => {
  return (
    <div className="flex flex-col">
      <Text className={`mb-2 text-xs capitalize`}>{label}</Text>
      <span className="flex">
        {content.map((content, idx) => (
          <Text
            key={idx}
            className={` font-semibold mr-2 last-of-type:mr-0 ${
              !lowercase && "capitalize"
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
