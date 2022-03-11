import classes from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className={classes.container}>
      <h1>Let's talk!</h1>
      <p>Want to get in touch or talk about a project?</p>
      <p>Feel free to contact me via email at <a className={classes.link}>dylantravisdev@gmail.com</a></p>
      <p>or let me know about you or your company by leaving your information at the <Link className={classes.link} to="/contact">contact page</Link> </p>
    </div>
  )
}

export default Footer;