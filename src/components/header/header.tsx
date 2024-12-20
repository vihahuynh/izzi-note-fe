import BurgerButton from './burgerButton/burgerButton'
import classes from './header.module.scss'

const Header = () => {
    return <div className={classes.header}>
        <BurgerButton />
        <div>logo</div>
        <input />
        <div>tools</div>
        <div>user</div>
    </div>
}

export default Header