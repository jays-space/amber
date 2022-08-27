/**
 *
 * @returns custom wrapper around Text and Icon components
 */

// COMPONENTS
import { Icon } from "../../Atomic/Icon";
import { Text } from "../../Atomic/Typography/Text";

const Filter = () => {
  return (
    <div className="flex justify-center items-center py-2 px-6 text-slate-500 bg-white rounded-md">
      <Icon name="filter" className="mr-2" />
      <Text className="capitalize">filter</Text>
    </div>
  );
};

export default Filter;
