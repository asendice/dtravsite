import { useState } from "react";
import FilterList from "./filter-list";
import ProjectsList from "./projects-list";
import classes from "./portfolio.module.css";

function Portfolio() {
  const [filter, setFilter] = useState("Show All");
  const [project, setProjects] = useState([]);

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>web developer portfolio</h1>
        <p>Check out my latest web software development portfolio projects.</p>
      </div>
      <FilterList setFilter={setFilter} filter={filter} />
      <ProjectsList filter={filter} />
    </div>
  );
}

export default Portfolio;
