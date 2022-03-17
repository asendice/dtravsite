import classes from "./squares.module.css";
import { Link } from "react-router-dom";

function Squares(){

  return (
    <Link to="/portfolio" className={classes.bigSquare}>
      <div className={`${classes.square} ${classes.one}`}></div>
      <div className={`${classes.square} ${classes.two}`}></div>
      <div className={`${classes.square} ${classes.three}`}></div>
      <div className={`${classes.square} ${classes.four}`}></div>
      <div className={`${classes.square} ${classes.five}`}></div>
      <div className={`${classes.square} ${classes.six}`}></div>
      <div className={`${classes.square} ${classes.seven}`}></div>
      <div className={`${classes.square} ${classes.eight}`}></div>
      <div className={`${classes.square} ${classes.nine}`}></div>
    </Link>
  )
}

export default Squares;