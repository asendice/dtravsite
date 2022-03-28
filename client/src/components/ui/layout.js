import classes from "./layout.module.css";
import Squares from "../nav/squares";
import Burger from "../nav/burger";
import Nav from "../nav/nav";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Layout(props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onAboutPage = pathname === "/";
  return (
    <div className={`${onAboutPage ? "" : classes.layout}`}>
      {pathname.includes("/portfolio/") && <Squares />}
      <Burger setOpen={setOpen} open={open} />
      {open ? <Nav setOpen={setOpen} /> : ""}
      {props.children}
    </div>
  );
}

export default Layout;
