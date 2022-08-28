// COMPONENTS
import { Icon } from "../../../../Atomic/Icon";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-20 py-3 bg-white shadow">
      <div className="flex flex-1">
        {/* toggle sidebar button */}
        <div className="flex items-center aspect-square">
          <Icon name="filter" size={32} />
        </div>

        {/* divider */}
        <span className="h-10 w-0.5 mx-8 bg-slate-600 rounded-lg opacity-20" />

        {/* search bar */}
        <input type={"search"} className="w-full border-2" />
      </div>

      {/* current user */}
      <div className="ml-10 flex flex-row items-center">
        <div className="w-14 aspect-square flex justify-center items-center rounded-full bg-yellow-400">
          <Icon name="add" size={30} className="!text-slate-800" />
        </div>

        <div className="mx-4 w-14 aspect-square flex justify-center items-center rounded-full bg-neutral-200">
          <Icon name="add" size={30} />
        </div>

        <img
          src="https://randomuser.me/api/portraits/men/59.jpg"
          alt="current user avatar"
          className="w-14 aspect-square rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
