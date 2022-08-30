import { useState } from "react";

// CONSTANTS
import recruiter from "../../../../../constants/recruiter.constants";
import SidebarMenuOptions from "../../../../../constants/sidebarOptions.constants";

// COMPONENTS
import { HeaderButton } from "../../../../Atomic/HeaderButton";
import { Button } from "../../../../Atomic/Button";
import { Icon } from "../../../../Atomic/Icon";
import { Text } from "../../../../Atomic/Typography/Text";

/**
 * @returns header element
 */

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <header
      title="header"
      className="relative flex flex-row justify-between items-center px-5 md:px-10 lg:px-20 py-3 bg-white shadow"
    >
      <div className="flex flex-1">
        {/* logo => hidden on smaller screens */}
        <div className="md:hidden">
          <img src="/logo.png" alt="amber software logo" className="w-32" />
        </div>

        {/* search bar => hidden on smaller screens */}
        <div className="relative hidden md:flex items-center gap-4">
          <Icon name="search" className="absolute ml-2 pointer-events-none" />
          <input
            type={"search"}
            placeholder="search..."
            className="w-full py-4 pl-10 pr-20 border-none text-xl focus-visible:outline-slate-400"
          />
        </div>
      </div>

      {/* current user => hidden on smaller screens */}
      <div className="ml-10 hidden md:flex flex-row items-center">
        <HeaderButton variant="primary" />
        <HeaderButton variant="secondary" />
        <img
          src={recruiter.avatar}
          alt={`${recruiter.name}'s avatar`}
          className="w-14 aspect-square rounded-full"
        />
      </div>

      {/* menu button => hidden on smaller screens */}
      <div className="z-50 md:hidden">
        <Button
          variant="icon-light"
          icon="menu"
          onClick={() => setIsMenuVisible((v) => !v)}
        />
      </div>

      {/* menu => hidden on smaller screens */}
      <div
        className={`fixed md:hidden top-0 ${
          isMenuVisible ? "left-0" : "translate-x-full"
        } bottom-0 px-10 flex flex-col justify-center items-center w-screen h-screen bg-slate-900 bg-opacity-90 backdrop-blur-md z-40 transition-transform ease-out duration-300`}
      >
        {SidebarMenuOptions.map((optionGroup, idx) => (
          <div key={idx} className="mb-0">
            {optionGroup.optionsList.map((option, idx) => (
              <div
                key={idx}
                className={`flex justify-center items-center my-2 py-3 px-6 rounded-md cursor-pointer  ${
                  option.label === "candidates"
                    ? "bg-yellow-500"
                    : "hover:bg-slate-800"
                } transform ease-out duration-100`}
              >
                <Text
                  key={idx}
                  className={`capitalize ${
                    option.label === "candidates"
                      ? "!text-slate-900 !font-bold !tracking-wider"
                      : "text-white"
                  }`}
                >
                  {option.label}
                </Text>
              </div>
            ))}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
