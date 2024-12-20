import ButtonWrap from "../../button/buttonWrap";
import classes from "./burgerButton.module.scss";

const BurgerButton = () => {
  return (
    <ButtonWrap>
      <span className={classes.lines} />
    </ButtonWrap>
  );
};

export default BurgerButton;
