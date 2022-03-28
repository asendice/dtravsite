import classes from "./nav.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav(props) {

  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <NavLink
          className={`${classes.listItem} ${pathname === "/" ? classes.active : "" }`}
          to="/"
          onClick={() => props.setOpen(false)}
        >
          <li>about</li>
        </NavLink>
        <NavLink
          className={`${classes.listItem} ${pathname.includes("/portfolio") ? classes.active : "" }`}
          to="/portfolio"
          onClick={() => props.setOpen(false)}
        >
          <li>portfolio</li>
        </NavLink>
        <NavLink
          className={`${classes.listItem} ${pathname === "/technologies" ? classes.active : "" }`}
          to="/technologies"
          onClick={() => props.setOpen(false)}
        >
          <li>tech</li>
        </NavLink>
        <NavLink
          className={`${classes.listItem} ${pathname === "/contact" ? classes.active : "" }`}
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
