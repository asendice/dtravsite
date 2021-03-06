import classes from "./project.module.css";
import Tag from "../ui/tag";
import { Link } from "react-router-dom";

function Project(props) {
  const { name, description, images, skills } = props.project;
  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <div className={`${classes.dot} ${classes.red}`}></div>
        <div className={`${classes.dot} ${classes.yellow}`}></div>
        <div className={`${classes.dot} ${classes.green}`}></div>
        <h5>{name}</h5>
      </div>
      <Link to={`/portfolio/${name}`}>
        <div
          className={classes.content}
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <div className={classes.overlay}>
            <ul className={classes.tagList}>
              {skills.map((skill, index) => (
                <li key={index}>
                  <Tag title={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Project;
