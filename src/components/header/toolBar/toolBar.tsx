import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

import ToolBarItem from "./toolBarItem";
import classes from "./toolBar.module.scss";
import iconClasses from "./../../icon/icon.module.scss";

const TOOLS = [
  {
    icon: <CiGrid2H className={iconClasses['icon--large']} />,
    tooltip: "List view",
  },
  {
    icon: <CiDark className={iconClasses['icon--large']} />,
    tooltip: "Dark mode",
  },
];

const ToolBar = () => {
  return (
    <div className={classes.toolbar}>
      {TOOLS.map((item) => (
        <ToolBarItem {...item} />
      ))}
    </div>
  );
};

export default ToolBar;
