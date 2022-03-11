import classes from "./button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  const { color, link, outsideLink } = props;

  let style = "#2f2f2f";
  if (color === "red") {
    style = `rgb(203, 0, 0)`;
  }
  if (color === "green") {
    style = `#00796B`;
  }
  if (color === "linkedin") {
    style = `#0077b5`;
  }
  if (color === "github") {
    style = `#4E545A`;
  }
  if (color === "twitter") {
    style = `#3299FF`;
  }
  if (link) {
    return (
      <Link
        to={link}
        className={classes.container}
        style={{ backgroundColor: style }}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.children}
      </Link>
    );
  }
  if (outsideLink) {
    return (
      <a
        href={outsideLink}
        className={classes.container}
        style={{ backgroundColor: style }}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.children}
      </a>
    );
  }
  return (
    <a className={classes.container} style={{ backgroundColor: style }}>
      {props.children}
    </a>
  );
}

export default Button;
