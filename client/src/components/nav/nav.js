import classes from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <Link
          className={classes.listItem}
          to="/"
          onClick={() => props.setOpen(false)}
        >
          <li>about</li>
        </Link>
        <Link
          className={classes.listItem}
          to="/portfolio"
          onClick={() => props.setOpen(false)}
        >
          <li>portfolio</li>
        </Link>
        <Link
          className={classes.listItem}
          to="/technologies"
          onClick={() => props.setOpen(false)}
        >
          <li>tech</li>
        </Link>
        <Link
          className={classes.listItem}
          to="/contact"
          onClick={() => props.setOpen(false)}
        >
          <li>contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
