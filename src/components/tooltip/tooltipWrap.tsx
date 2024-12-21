interface ITooltipWrapProps {
    children: React.ReactNode;
    tooltip: string
}
import classes from "./tooltipWrap.module.scss";

const TooltipWrap = ({ children, tooltip }: ITooltipWrapProps) => {
    return <div className={classes.container}>
        <div>{children}</div>
        <span className={classes.container__tooltip}>{tooltip}</span>
    </div>
}

export default TooltipWrap