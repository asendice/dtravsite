import classes from "./project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backendApi from "../../apis/backendApi";
import Buttons from "./buttons";
function Project() {
  const [project, setProject] = useState({});
  const { name } = useParams();

  console.log(project);

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

      <Buttons project={project}/>
      
    </div>
  );
}

export default Project;
