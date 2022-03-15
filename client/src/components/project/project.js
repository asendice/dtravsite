import classes from "./project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backendApi from "../../apis/backendApi";
import Buttons from "./buttons";
import Images from "./images";
import Footer from "../footer/footer";
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

  if (project) {
    return (
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1>{project.name}</h1>
          <p>{project.excerpt}</p>
        </div>

        <Buttons project={project} />
        
        <div className={classes.images}>
          <Images images={project.images} />
        </div>

        <div className={classes.paragraph}>
          <h1>About this project</h1>
          <div className={classes.line}></div>
          <p>{project.description}</p>
        </div>
        <div className={classes.paragraph}>
          <h1>Technologies</h1>
          <p>Technologies that were involved in the creation of this project</p>
          <div className={classes.line}></div>
          {project.skills && (
            <ul className={classes.list}>
              {project.skills.map((skill) => (
                <li key={skill}>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Footer />
      </div>
    );
  }
  return <div>No Projets Available</div>;
}

export default Project;
