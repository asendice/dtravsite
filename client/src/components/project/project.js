import classes from "./project.module.css";
import { useParams } from "react-router-dom";


function Project() {

  const { name } = useParams();

  console.log(name, "name")

  return (
    <div className={classes.container}>
      {name}
    </div>
  )
}

export default Project;