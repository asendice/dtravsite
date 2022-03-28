import classes from "./layout.module.css";

import Nav from "../nav/nav";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Layout(props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onAboutPage = pathname === "/";
  return (
    <div className={`${onAboutPage ? "" : classes.layout}`}>
      <Nav setOpen={setOpen} open={open} />
      {props.children}
    </div>
  );
}

export default Layout;
