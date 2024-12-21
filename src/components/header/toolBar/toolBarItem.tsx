import ButtonWrap from "../../button/buttonWrap";
import TooltipWrap from "../../tooltip/tooltipWrap";

interface IToolbarItemProps {
  icon: React.ReactNode;
  tooltip: string;
}

const ToolBarItem = ({ icon, tooltip }: IToolbarItemProps) => {
  return (
    <TooltipWrap tooltip={tooltip}>
      <ButtonWrap>{icon}</ButtonWrap>
    </TooltipWrap>
  );
};

export default ToolBarItem;
