import classes from "./projects-list.module.css";
import Project from "./project";

function ProjectList(props) {
  const { projects, filter } = props;

  return (
    <div className={classes.container}>
      {filter === "" ? (
        <p>
          Showing all projects. Select a filter to list projects by skill or
          technology.
        </p>
      ) : (
        <p>Showing {projects.length} projects filtered by {filter} </p>
      )}
      <p>Click on any project to view more information.</p>
      <ul className={classes.list}>
        {projects.sort((a, b) => a.order - b.order).map((prj) => (
          <li key={prj.name}><Project project={prj}/></li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
