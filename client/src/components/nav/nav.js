import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <NavLink
          className={classes.listItem}
          to="/"
          onClick={() => props.setOpen(false)}
        >
          <li>about</li>
        </NavLink>
        <NavLink
          className={classes.listItem}
          to="/portfolio"
          onClick={() => props.setOpen(false)}
        >
          <li>portfolio</li>
        </NavLink>
        <NavLink
          className={classes.listItem}
          to="/technologies"
          onClick={() => props.setOpen(false)}
        >
          <li>tech</li>
        </NavLink>
        <NavLink
          className={classes.listItem}
          to="/contact"
          onClick={() => props.setOpen(false)}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
