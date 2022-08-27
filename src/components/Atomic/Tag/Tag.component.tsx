import { Text } from "../Typography/Text";
/**
 * @param label: content of the tag
 */

interface ITag {
  label: string;
}

const Tag = ({ label }: ITag) => {
  return (
    <div className="flex justify-center items-center mx-4 py-1 px-2 rounded-md text-sm text-slate-700 bg-neutral-300 capitalize bg-opacity-80">
      <Text>{label}</Text>
    </div>
  );
};

export default Tag;
