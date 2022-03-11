import classes from "./contact.module.css";
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillFilePdfFill,
} from "react-icons/bs";
import Button from "../ui/button";

function Contact() {
  return (
    <div className={classes.container}>
      <h1>Get in touch</h1>
      <p>
        If you want to get in touch, talk to me about a project collaboration or
        just say hello, fill out this form below or send an email to{" "}
        <a className={classes.link}>dylantravisdev@gmail.com</a> and let's talk!
      </p>

      <form className={classes.form}>
        <div className={classes.inputContainer}>
          <BsFillPersonFill className={classes.icon} />
          <input placeholder="Fill out your name" />
        </div>
        <div className={classes.inputContainer}>
          <BsFillEnvelopeFill className={classes.icon} />
          <input placeholder="Write a message" />
        </div>
        <div className={classes.btnContainer}>
          <Button color="green">SUBMIT YOUR MESSAGE </Button>
        </div>
      </form>

      <h2>Let's get social</h2>
      <p>Check out my profiles on Linkedin, GitHub, Twitter, and my Resume</p>
      <div className={classes.socials}>
        <Button
          color="linkedin"
          outsideLink="https://www.linkedin.com/in/dylan-travis-2716a4205/"
        >
          {" "}
          <BsLinkedin /> Linkedin{" "}
        </Button>
        <Button color="github" outsideLink="https://github.com/asendice">
          {" "}
          <BsGithub /> GitHub{" "}
        </Button>
        <Button color="twitter" outsideLink="https://twitter.com/KBdylan">
          {" "}
          <BsTwitter /> Twitter{" "}
        </Button>
        <Button color="red" outsideLink="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf">
          {" "}
          <BsFillFilePdfFill /> Resume{" "}
        </Button>
      </div>
    </div>
  );
}

export default Contact;
