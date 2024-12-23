import { COLOR_TYPE } from "../../constant";
import TooltipWrap from "../tooltip/tooltipWrap";
import classes from "./colorItem.module.scss";

interface IColorProps {
  name: string,
  bgColor?: string;
  bgUrl?: string;
  type: COLOR_TYPE;
}

const ColorItem = ({ name, bgColor, bgUrl, type }: IColorProps) => {
  return <TooltipWrap tooltip={name}>
    {type === COLOR_TYPE.BG_COLOR ? (
      <span className={classes.color} style={{ backgroundColor: bgColor }}></span>
    ) : (
      <img className={classes.url} src={bgUrl} />
    )}
  </TooltipWrap>
};

export default ColorItem;
