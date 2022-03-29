import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/ui/layout";
import About from "./components/about/about";
import Porfolio from "./components/portfolio/portfolio";
import Tech from "./components/tech/tech";
import Contact from "./components/contact/contact";
import Project from "./components/project/project";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/technologies" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/:name" element={<Project />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
