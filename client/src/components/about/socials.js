import { BsLinkedin, BsGithub, BsTwitter, BsFillFilePdfFill } from "react-icons/bs";
import classes from "./socials.module.css";

function Socials() {
  return (
    <div className={classes.container}>
      <a
        href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
        rel="noopener noreferrer"
        target="_blank"
        className={`${classes.iconContainer} ${classes.linkedin}`}
      >
        <BsLinkedin className={classes.linkedin} />
      </a>
      <a
        href="https://github.com/asendice"
        rel="noopener noreferrer"
        target="_blank"
        className={`${classes.iconContainer} ${classes.github}`}
      >
        <BsGithub className={classes.github} />
      </a>
      <a
        href="https://twitter.com/KBdylan"
        rel="noopener noreferrer"
        target="_blank"
        className={`${classes.iconContainer} ${classes.twitter}`}
      >
        <BsTwitter className={classes.twitter} />
      </a>
      <a
        href="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className={`${classes.iconContainer} ${classes.red}`}
      >
        <BsFillFilePdfFill className={classes.red}  />
      </a>
    </div>
  );
}

export default Socials;
