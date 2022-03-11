import classes from "./button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  const { title, color, link } = props;

  let style = "#2f2f2f";
  if(color === "red"){
    style = `rgb(203, 0, 0)`
  }
  if(color === "green"){
    style = `#00796B`
  }
  if (link){
    return <Link to={link} className={classes.container} style={{backgroundColor: style}}>{title}</Link>
  }
  return (
    <a className={classes.container} style={{backgroundColor: style}}>{title}</a>
  )
}

export default Button;