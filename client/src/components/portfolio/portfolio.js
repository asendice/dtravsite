import { useState, useEffect } from "react";
import FilterList from "./filter-list";
import ProjectsList from "./projects-list";
import Footer from "../footer/footer";
import classes from "./portfolio.module.css";
import backendApi from "../../apis/backendApi";

function Portfolio() {
  const [filter, setFilter] = useState("Show All");
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    await backendApi
      .get("/projects")
      .then((response) => {
        if (response) {
          return response;
        } else {
          const error = new Error(`Error ${error.status}: ${error.statusText}`);
          error.response = response;
          throw error;
        }
      })
      .then((response) => setProjects(response.data.message));
  }

  useEffect(() => {
    getProjects();
  },[])

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
