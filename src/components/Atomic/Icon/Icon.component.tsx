import { BiFilterAlt, BiHomeAlt, BiMessageSquareDetail, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsPeople, BsPerson, BsArrowLeft } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiSettings2Line } from "react-icons/ri";
import { FiMoreVertical, FiInbox } from "react-icons/fi";
import { FaTasks, FaProjectDiagram, FaRegBell } from "react-icons/fa";
import {
  AiOutlineDownload,
  AiOutlinePrinter,
  AiOutlinePieChart,
  AiOutlineSchedule,
} from "react-icons/ai";
import { SiBmcsoftware } from "react-icons/si";
import { TiArrowMinimise } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

// TYPES
import { IconNamesType } from "../../../types/types";

/**
 * @param name: name of icon to return
 * @param size: icon size
 * @param className (optional): additional classes to be added
 *
 * @returns icon component depending on icon name
 */

interface IIcon {
  name: IconNamesType;
  size?: number;
  className?: string;
}

const Icon = ({ name, size = 24, className = "" }: IIcon) => {
  switch (name) {
    case "filter":
      return (
        <BiFilterAlt size={size} className={`text-slate-500 ${className}`} />
      );

    case "download":
      return (
        <AiOutlineDownload
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "print":
      return (
        <AiOutlinePrinter
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "add":
      return <IoMdAdd size={size} className={`text-slate-500 ${className}`} />;

    case "more":
      return (
        <FiMoreVertical size={size} className={`text-slate-500 ${className}`} />
      );

    case "home":
      return (
        <BiHomeAlt size={size} className={`text-slate-500 ${className}`} />
      );

    case "inbox":
      return <FiInbox size={size} className={`text-slate-500 ${className}`} />;

    case "calendar":
      return (
        <AiOutlineSchedule
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "task":
      return <FaTasks size={size} className={`text-slate-500 ${className}`} />;

    case "project":
      return (
        <FaProjectDiagram
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "new":
      return <SiBmcsoftware size={size} className={`text-slate-500 ${className}`} />;

    case "person":
      return <BsPerson size={size} className={`text-slate-500 ${className}`} />;

    case "people":
      return <BsPeople size={size} className={`text-slate-500 ${className}`} />;

    case "report":
      return (
        <AiOutlinePieChart
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "settings":
      return (
        <RiSettings2Line
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "minimize":
      return (
        <TiArrowMinimise
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "notification":
      return (
        <FaRegBell
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "message":
      return (
        <BiMessageSquareDetail
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "email":
      return (
        <HiOutlineMail
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "previous":
      return (
        <BiChevronLeft
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "next":
      return (
        <BiChevronRight
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "back":
      return (
        <BsArrowLeft
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case undefined:
      return null;
  }
};

export default Icon;
