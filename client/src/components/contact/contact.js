import classes from "./contact.module.css";
import { useState, useEffect } from "react";
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsFillFilePdfFill,
} from "react-icons/bs";
import Button from "../ui/button";
import backendApi from "../../apis/backendApi";
import { useNotification } from "../../store/notification-context";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const notification = useNotification();

  async function postMessage(post) {
    const json = JSON.stringify(post);
    await backendApi
      .post("/messages", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response) {
          setStatus(response.status === 200 ? "success" : "failed");
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      });
  }

  useEffect(() => {
    console.log(status)
    if (status) {
      notification.showNotification({
        message: status === 'success' ? "Message sent!" : "Message failed",
        status: status === 'success' ? "success" : "failed",
      });
    }
    setStatus("")
  }, [status]);

  function handleSubmit(e) {
    e.preventDefault();
    const post = {
      name: name,
      text: message,
    };
    postMessage(post);
    setName("");
    setMessage("");
  }

  return (
    <div className={classes.container}>
      <h1>Get in touch</h1>
      <p>
        If you want to get in touch, talk to me about a project collaboration or
        just say hello, fill out this form below or send an email to{" "}
        <a className={classes.link}>dylantravisdev@gmail.com</a> and let's talk!
      </p>

      <form
        id="contact-form"
        className={classes.form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={classes.inputContainer}>
          <BsFillPersonFill className={classes.icon} />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Fill out your name"
          />
        </div>
        <div className={classes.inputContainer}>
          <BsFillEnvelopeFill className={classes.icon} />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message"
          />
        </div>
        <div className={classes.btnContainer}>
          <Button form="contact-form" color="green">
            SUBMIT YOUR MESSAGE{" "}
          </Button>
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
        <Button
          color="red"
          outsideLink="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
        >
          {" "}
          <BsFillFilePdfFill /> Resume{" "}
        </Button>
      </div>
    </div>
  );
}

export default Contact;
