import classes from "./project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backendApi from "../../apis/backendApi";
import Button from "../ui/button";
import { BsBoxArrowUpRight, BsLinkedin, BsGithub, BsFillFilePdfFill } from "react-icons/bs";

function Project() {
  const [project, setProject] = useState({});
  const { name } = useParams();

  async function getProjectByName() {
    await backendApi
      .get(`/projects/${name}`)
      .then((response) => {
        if (response) {
          return response;
        } else {
          const error = new Error(`Error ${error.status}: ${error.statusText}`);
          error.response = response;
          throw error;
        }
      })
      .then((response) => setProject(response.data.message[0]));
  }

  useEffect(() => {
    getProjectByName();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{project.name}</h1>
        <p>{project.excerpt}</p>
      </div>

      <div className={classes.btnContainer}>
        <Button color="green">
          {" "}
          <BsBoxArrowUpRight className={classes.icon} /> <p className={classes.btnText}>Visit the website</p>
        </Button>
        <div className={classes.socials}>
          <Button color="linkedin">
            <BsLinkedin className={classes.icon}  />{" "}
          </Button>
          <Button color="github">
            <BsGithub className={classes.icon}  />
          </Button>
          <Button color="red">
            <BsFillFilePdfFill className={classes.icon}  />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Project;
