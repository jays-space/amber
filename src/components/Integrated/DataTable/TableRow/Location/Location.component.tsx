// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface ILocation {
  city: string;
  country: string;
}

const Location = ({ city, country }: ILocation) => {
  return (
    <div>
      <span>
        <Text
          strong
          className="w-10/12 text-xl whitespace-nowrap text-ellipsis overflow-hidden capitalize"
        >
          {city}
        </Text>
      </span>
      <span>
        <Text className="capitalize opacity-75">{country}</Text>
      </span>
    </div>
  );
};

export default Location;
