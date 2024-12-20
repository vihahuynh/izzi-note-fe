import classes from './buttonWrap.module.scss';

const ButtonWrap = ({ children }: { children: React.ReactNode }) => {
    return <button className={classes.button}>{children}</button>
}

export default ButtonWrap