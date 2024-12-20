import BurgerButton from "./burgerButton/burgerButton";
import classes from "./header.module.scss";
import logo from "./../../assets/images/logo.jpg";
import User from "./user/user";
import ToolBar from "./toolBar/toolBar";

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
                <ToolBar />
                <User />
            </div>
        </div>
    );
};

export default Header;
