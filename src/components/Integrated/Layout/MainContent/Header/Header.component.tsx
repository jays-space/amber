// CONSTANTS
import recruiter from "../../../../../constants/recruiter.constants";
import { HeaderButton } from "../../../../Atomic/HeaderButton";

// COMPONENTS
import { Icon } from "../../../../Atomic/Icon";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-20 py-3 bg-white shadow">
      <div className="flex flex-1">
        {/* search bar */}
        <div className="relative flex items-center gap-4">
          <Icon name="search" className="absolute ml-2 pointer-events-none" />
          <input
            type={"search"}
            placeholder="search..."
            className="w-full py-4 pl-10 pr-20 border-none text-xl focus-visible:outline-slate-400"
          />
        </div>
      </div>

      {/* current user */}
      <div className="ml-10 flex flex-row items-center">
        <HeaderButton variant="primary" />
        <HeaderButton variant="secondary" />
        <img
          src={recruiter.avatar}
          alt={`${recruiter.name}'s avatar`}
          className="w-14 aspect-square rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
