import classes from "./buttons.module.css";
import Button from "../ui/button";
import {
  BsBoxArrowUpRight,
  BsLinkedin,
  BsGithub,
  BsFillFilePdfFill,
} from "react-icons/bs";

function Buttons(props) {
  const { project } = props;
  return (
    <div className={classes.btnContainer}>
      {project.live && (
        <Button color="green" outsideLink={`${project.live}`}>
          <BsBoxArrowUpRight className={classes.icon} />{" "}
          <p className={classes.btnText}>Visit the website</p>
        </Button>
      )}
      <Button color="github" outsideLink={`${project.gitHub}`}>
        <BsBoxArrowUpRight className={classes.icon} />{" "}
        <p className={classes.btnText}>Visit the github</p>
      </Button>
      <div className={classes.socials}>
        <Button
          color="linkedin"
          outsideLink="https://www.linkedin.com/in/dylan-travis-2716a4205/"
        >
          <BsLinkedin className={classes.icon} />{" "}
        </Button>
        <Button color="github" outsideLink="https://github.com/asendice">
          <BsGithub className={classes.icon} />
        </Button>
        <Button
          color="red"
          outsideLink="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
        >
          <BsFillFilePdfFill className={classes.icon} />
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
