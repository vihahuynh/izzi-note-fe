import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

import ToolBarItem from "./toolBarItem";
import classes from "./toolBar.module.scss";

const TOOLS = [
  {
    icon: <CiGrid2H className={classes.icon} />,
    tooltip: "List view",
  },
  {
    icon: <CiDark className={classes.icon} />,
    tooltip: "Dark mode",
  },
];

const ToolBar = () => {
  return (
    <div className={classes.toolbar}>
      {TOOLS.map((item) => (
        <ToolBarItem icon={item.icon} tooltip={item.tooltip} />
      ))}
    </div>
  );
};

export default ToolBar;
