import ButtonWrap from "../../button/buttonWrap";
import TooltipWrap from "../../tooltip/tooltipWrap";
import classes from "./toolBarItem.module.scss";

interface IToolbarItemProps {
  icon: React.ReactNode;
  tooltip: string;
}

const ToolBarItem = ({ icon, tooltip }: IToolbarItemProps) => {
  return (
    <TooltipWrap tooltip={tooltip}>
      <ButtonWrap customClassName={classes.toolBarItemBtn}>{icon}</ButtonWrap>
    </TooltipWrap>
  );
};

export default ToolBarItem;
