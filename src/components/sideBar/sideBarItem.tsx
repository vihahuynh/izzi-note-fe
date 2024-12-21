import classes from "./sideBarItem.module.scss";

interface ISideBarItemProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
}

const SideBarItem = ({ icon, title, isActive }: ISideBarItemProps) => {
  return (
    <button className={classes.sideBarItem} data-active={isActive.toString()}>
      <div className={classes.sideBarItem__icon}>{icon}</div>
      <p className={classes.sideBarItem__title}>{title}</p>
    </button>
  );
};

export default SideBarItem;
