import classes from "./buttonWrap.module.scss";

interface IButtonWrapProps {
  children: React.ReactNode;
  customClassName?: string;
}

const ButtonWrap = ({ children, customClassName }: IButtonWrapProps) => {
  const className = customClassName
    ? `${classes.button} ${customClassName}`
    : classes.button;
  return <button className={className}>{children}</button>;
};

export default ButtonWrap;
