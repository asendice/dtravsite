import Button from "../ui/button";
import Socials from "./socials";
import classes from "./about.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={classes.container}>
      <div>
        <Socials />
      </div>
      <div className={classes.textContainer}>
        <h1> Hello, my name is Dylan Travis.</h1>
        <p>
          I am a full-stack web developer specializing in React and
          React-Native.
          <br />I am currently seeking a remote Front-End || Full-Stack web
          developer position. <br />
          Feel free to take a look at my latest projects on the{" "}
          <Link className={classes.link} to="/portfolio">
            web portfolio page
          </Link>
          .
          <br />
          The technologies that I have used and or actively using can be viewed
          on the{" "}
          <Link className={classes.link} to="/technologies">
            tech stack page
          </Link>
          .
        </p>
      </div>
      <div className={classes.certificates}>
        <Button>Nucamp Bootstrap Certificate</Button>
        <Button>Nucamp Front-End Web Development: React</Button>
        <Button>Nucamp Front-End Web and Mobile Development Bootcamp</Button>
      </div>
      <div className={classes.btnContainer}>
        <Button color="red" link="/portfolio">
          {" "}
          Web Portfolio Page &#8594;
        </Button>
      </div>
    </div>
  );
}

export default About;
