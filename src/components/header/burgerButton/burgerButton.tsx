import ButtonWrap from "../../button/buttonWrap";
import { CiMenuBurger } from "react-icons/ci";


import classes from "./burgerButton.module.scss";
import iconClass from "../../icon/icon.module.scss";

const BurgerButton = () => {
  return (
    <div className={classes.burgerButtonContainer}>
      <ButtonWrap customClassName={classes.burgerButton}>
        <CiMenuBurger className={iconClass.icon} />
      </ButtonWrap>
    </div>
  );
};

export default BurgerButton;
