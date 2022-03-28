import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/ui/layout";
import About from "./components/about/about";
import Porfolio from "./components/portfolio/portfolio";
import Tech from "./components/tech/tech";
import Contact from "./components/contact/contact";
import Project from "./components/project/project";
import backendApi from "./apis/backendApi";
import { useState, useEffect } from "react";

function App() {
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
  }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Porfolio projects={projects} />} />
          <Route path="/technologies" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/portfolio/:name"
            element={<Project projects={projects} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
