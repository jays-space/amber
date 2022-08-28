// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IUsername {
  name: string;
  avatar: string;
  candidate?: boolean;
}

const User = ({ name, avatar, candidate = false }: IUsername) => {
  return (
    <div className="flex items-center">
      <img
        src={avatar}
        alt={name}
        className="w-10 mr-4 aspect-square rounded-full"
      />
      <Text
        strong
        className="pr-4 text-lg capitalize whitespace-nowrap text-ellipsis overflow-hidden"
      >
        {name}
      </Text>
    </div>
  );
};

export default User;
