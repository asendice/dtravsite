import classes from "./project.module.css";
import { useParams } from "react-router-dom";


function Project(props) {

  const { name } = useParams();
  const project = props.projects.find((prj) => prj.name === name);

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>{project.name}</h1>
        <p>{project.excerpt}</p>
      </div>
      {name}
    </div>
  )
}

export default Project;