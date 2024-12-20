import classes from "./user.module.scss"
import logo from "./../../../assets/images/logo.jpg";

const User = () => {
  return <button className={classes.user}>
    <img className={classes.avatar} src={logo} width={40} />
  </button>
}

export default User