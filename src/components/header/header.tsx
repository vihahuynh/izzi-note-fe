import BurgerButton from "./burgerButton/burgerButton";
import classes from "./header.module.scss";
import logo from "./../../assets/images/logo.jpg";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <BurgerButton />
                <div className={classes.logo}>
                    <img src={logo} width={40} />
                    <span>IZZI</span>
                </div>
                <input />
            </div>
            <div className={classes.header__right}>
                <div>tools</div>
                <div>user</div>
            </div>
        </div>
    );
};

export default Header;
