import classes from "./contact.module.css";
import { BsFillPersonFill, BsFillEnvelopeFill } from "react-icons/bs";
import Button from "../ui/button";

function Contact() {
  return (
    <div className={classes.container}>
      <h1>Get in touch</h1>
      <p>
        If you want to get in touch, talk tome about a project collaboration or
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
          <Button title="SUBMIT YOUR MESSAGE" color='green' />
        </div>
      </form>
    </div>
  );
}

export default Contact;
