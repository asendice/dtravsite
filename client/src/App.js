import { Routes, Route, useParams, useLocation } from "react-router-dom";
import './App.css';
import Squares from "./components/nav/squares";
import Burger from "./components/nav/burger";
import About from "./components/about/about";
import Porfolio from "./components/portfolio/portfolio";
import Tech from "./components/tech/tech";
import Contact from "./components/contact/contact";
import Nav from "./components/nav/nav";
import Project from "./components/project/project";
import backendApi from "./apis/backendApi";
import { useState, useEffect } from "react";

function App() {
  const [ open, setOpen ] = useState(false);
  const [projects, setProjects] = useState([]);

  const { pathname } = useLocation();
  console.log(pathname)

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
    <div className="App">
      {pathname.includes("/portfolio/") && <Squares />}
      <Burger setOpen={setOpen} open={open} />
      {open ? <Nav setOpen={setOpen} /> : ""}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Porfolio projects={projects} />} />
        <Route path="/technologies" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:name" element={<Project projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;
