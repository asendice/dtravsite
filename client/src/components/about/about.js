import classes from "./about.module.css";
import Button from "../ui/button";
import Socials from "./socials";
import Certificate from "../ui/certificate";
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
          <br />I am currently seeking a remote Front-End or Full-Stack web
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
        <Certificate link="https://dtravmysite.s3.us-west-1.amazonaws.com/certificates/Bootstrap_Certificate_Dylan.pdf">
          Front-End Web Development: Bootstrap
        </Certificate>
        <Certificate link="https://dtravmysite.s3.us-west-1.amazonaws.com/certificates/React_Certificate_Dylan.pdf">
          Front-End Web Development: React
        </Certificate>
        <Certificate link="https://dtravmysite.s3.us-west-1.amazonaws.com/certificates/Front_End_Certificate_Dylan.pdf">
          Front-End Web and Mobile Development Bootcamp
        </Certificate>
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
