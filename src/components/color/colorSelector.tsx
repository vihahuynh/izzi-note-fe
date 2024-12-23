import { BG_COLOR, BG_URL, COLOR_TYPE } from "../../constant";
import ColorItem from "./colorItem";
import { CiImageOff } from "react-icons/ci";
import { CiLocationOff } from "react-icons/ci";
import TooltipWrap from "../tooltip/tooltipWrap";
import ButtonWrap from "../button/buttonWrap";

import classes from "./colorSelector.module.scss";
import iconClasses from './../icon/icon.module.scss';

const ColorSelector = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.list} ${classes['list--top']}`}>
        <TooltipWrap tooltip="Default">
          <ButtonWrap customClassName={classes.colorBtn}>
            <CiLocationOff className={iconClasses['icon--medium']} />
          </ButtonWrap>
        </TooltipWrap>
        {BG_COLOR.map((bgColor) => (
          <ColorItem
            name={bgColor.name}
            type={COLOR_TYPE.BG_COLOR}
            bgColor={bgColor.codeLight}
          />
        ))}
      </div>
      <div className={classes.list}>
        <TooltipWrap tooltip="Default">
          <ButtonWrap customClassName={classes.urlBtn}>
            <CiImageOff className={iconClasses['icon--medium']} />
          </ButtonWrap>
        </TooltipWrap>
        {BG_URL.map((bgColor) => (
          <ColorItem
            name={bgColor.name}
            type={COLOR_TYPE.BG_URL}
            bgUrl={bgColor.urlLight}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
