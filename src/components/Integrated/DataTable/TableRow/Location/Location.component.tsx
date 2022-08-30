// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface ILocation {
  city: string;
  country: string;
}

/**
 *
 * @param city -> candidate location city
 * @param country -> candidate location country
 *
 * @returns datable component rendering location of candidate
 */

const Location = ({ city, country }: ILocation) => {
  return (
    <div title="candidate-city-country">
      <span>
        <Text
          strong
          className="w-10/12 text-lg whitespace-nowrap text-ellipsis overflow-hidden capitalize"
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
