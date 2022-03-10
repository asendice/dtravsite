import Button from "../ui/button";
import Socials from "./socials";
import classes from "./about.module.css";

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
        </p>
        {/* Add route link and remove <a> tag  */}
        <p>
          I am currently seeking a remote Front-End || Full-Stack web developer
          position.{" "}
        </p>
        <p>
          Feel free to take a look at my latest projects on the{" "}
          <a>web portfolio page</a>.
        </p>
        {/* Add route link and remove <a> tag  */}
        <p>
          The technologies that I have used and or actively using can be view on
          the <a>tech stack page</a>.
        </p>
      </div>
      <div className={classes.btnContainer}>
        <Button title="WEB PORTFOLIO PAGE" color="red" link="/portfolio" />
      </div>
    </div>
  );
}

export default About;
