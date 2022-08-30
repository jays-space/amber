import {
  BiFilterAlt,
  BiHomeAlt,
  BiMessageSquareDetail,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { BsPeople, BsPerson, BsArrowLeft, BsSearch } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiSettings2Line } from "react-icons/ri";
import { FiMoreVertical, FiInbox } from "react-icons/fi";
import { FaTasks, FaProjectDiagram, FaRegBell } from "react-icons/fa";
import {
  AiOutlineDownload,
  AiOutlinePrinter,
  AiOutlinePieChart,
  AiOutlineSchedule,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineMenu,
} from "react-icons/ai";
import { SiBmcsoftware } from "react-icons/si";
import { TiArrowMinimise } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { CgSpinnerTwoAlt } from "react-icons/cg";

// TYPES
import { IconNamesType } from "../../../types/types";

/**
 * @param name -> name of icon to return
 * @param size -> icon size
 * @param className (optional) -> additional classes to be added
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
        <BiFilterAlt
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "download":
      return (
        <AiOutlineDownload
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "print":
      return (
        <AiOutlinePrinter
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "add":
      return (
        <IoMdAdd
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "more":
      return (
        <FiMoreVertical
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "home":
      return (
        <BiHomeAlt
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "inbox":
      return (
        <FiInbox
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "calendar":
      return (
        <AiOutlineSchedule
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "task":
      return (
        <FaTasks
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "project":
      return (
        <FaProjectDiagram
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "new":
      return (
        <SiBmcsoftware
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "person":
      return (
        <BsPerson
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "people":
      return (
        <BsPeople
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "report":
      return (
        <AiOutlinePieChart
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "settings":
      return (
        <RiSettings2Line
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "minimize":
      return (
        <TiArrowMinimise
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "notification":
      return (
        <FaRegBell
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "message":
      return (
        <BiMessageSquareDetail
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "email":
      return (
        <HiOutlineMail
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "previous":
      return (
        <BiChevronLeft
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "next":
      return (
        <BiChevronRight
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "back":
      return (
        <BsArrowLeft
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "visible":
      return (
        <AiOutlineEye
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "hidden":
      return (
        <AiOutlineEyeInvisible
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "search":
      return (
        <BsSearch
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "menu":
      return (
        <AiOutlineMenu
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case "spinner":
      return (
        <CgSpinnerTwoAlt
          data-testid={`icon-${name}`}
          size={size}
          className={`text-slate-500 ${className}`}
        />
      );

    case undefined:
      return null;
  }
};

export default Icon;
