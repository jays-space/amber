// COMPONENTS
import { Text } from "../../../../Atomic/Typography/Text";

interface IUsername {
  name: string;
  avatar: string;
  candidate?: boolean;
}

/**
 * @param name -> candidate full name (formatted)
 * @param avatar -> candidate avatar url
 * @param candidate -> determines if thu user is a candidate or recruiter
 * @returns datable component rendering user details
 */

const User = ({ name, avatar, candidate = false }: IUsername) => {
  return (
    <div title="user-details" className="flex items-center">
      <img
        src={avatar}
        alt={name}
        className={`w-16 lg:w-10 mr-4 aspect-square rounded-full ${
          !candidate && "hidden lg:flex"
        }`}
      />

      <div className="flex flex-col overflow-hidden">
        {!candidate && (
          <Text className={`flex lg:hidden capitalize`}>owner</Text>
        )}

        <Text
          strong
          className={`pr-4 text-sm md:text-lg capitalize whitespace-nowrap text-ellipsis overflow-hidden`}
        >
          {name}
        </Text>
      </div>
    </div>
  );
};

export default User;
