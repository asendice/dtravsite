import { useState } from "react";
import FilterList from "./filter-list";
import ProjectsList from "./projects-list";
import Footer from "../footer/footer";
import classes from "./portfolio.module.css";

function Portfolio(props) {
  const [filter, setFilter] = useState("Show All");

  const { projects } = props;

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>web developer portfolio</h1>
        <p>Check out my latest web software development portfolio projects.</p>
      </div>
      <FilterList setFilter={setFilter} filter={filter} />
      <ProjectsList filter={filter} projects={projects} />
      <Footer />
    </div>
  );
}

export default Portfolio;
