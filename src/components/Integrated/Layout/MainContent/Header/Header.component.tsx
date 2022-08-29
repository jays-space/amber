// CONSTANTS
import recruiter from "../../../../../constants/recruiter.constants";

// COMPONENTS
import { Icon } from "../../../../Atomic/Icon";

const animationStyles = "transform ease-out duration-100 cursor-pointer";

interface IHeaderButton {
  variant: "primary" | "secondary";
}
const HeaderButton = ({ variant }: IHeaderButton) => (
  <div
    className={`w-14 aspect-square flex justify-center items-center rounded-full last-of-type:mx-4 cursor-pointer ${animationStyles} ${
      variant === "primary"
        ? "bg-yellow-400 hover:bg-opacity-80"
        : "bg-neutral-200 hover:bg-opacity-80"
    }`}
  >
    <Icon
      name={variant === "primary" ? "add" : "notification"}
      size={30}
      className={variant === "primary" ? "!text-slate-800" : ""}
    />
  </div>
);

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-20 py-3 bg-white shadow">
      <div className="flex flex-1">
        {/* toggle sidebar button */}
        <div
          className={`w-14 aspect-square flex items-center justify-center rounded-lg hover:bg-slate-100 ${animationStyles}`}
        >
          <Icon name="minimize" size={32} />
        </div>

        {/* divider */}
        <span className="h-10 w-0.5 mx-8 bg-slate-600 rounded-lg opacity-20" />

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
