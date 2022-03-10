import classes from "./project.module.css";

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
      <div className={classes.content} style={{backgroundImage: `url(${images[0]})`}}>

      </div>
    </div>
  )
}

export default Project;