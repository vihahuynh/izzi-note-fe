import classes from './burgerButton.module.scss'

const BurgerButton = () => {
    return <button className={classes.button}>
        <span className={classes.lines}></span>
    </button>
}

export default BurgerButton