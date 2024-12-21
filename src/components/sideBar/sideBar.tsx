import classes from "./sideBar.module.scss";
import iconClasses from "../icon/icon.module.scss";

import SideBarItem from "./sideBarItem";

import { CiStickyNote } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { CiSignpostR1 } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

const SIDE_BAR_TOP = [
  {
    icon: <CiStickyNote className={iconClasses.icon} />,
    title: "Notes",
    isActive: false,
  },
  {
    icon: <CiBellOn className={iconClasses.icon} />,
    title: "Reminder",
    isActive: true,
  },
];

const SideBar = () => {
  return <div className={classes.sideBar}>
    {SIDE_BAR_TOP.map(item => <SideBarItem {...item} />)}
  </div>;
};

export default SideBar;
