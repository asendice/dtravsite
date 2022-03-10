import { Routes, Route } from "react-router-dom";
import './App.css';
import Burger from "./components/nav/burger";
import About from "./components/about/about";
import Porfolio from "./components/portfolio/portfolio";
import Tech from "./components/tech/tech";
import Contact from "./components/contact/contact";
import Nav from "./components/nav/nav";
import { useState } from "react";

function App() {
  const [ open, setOpen ] = useState(false);
  return (
    <div className="App">
      <Burger setOpen={setOpen} open={open} />
      {open ? <Nav setOpen={setOpen} /> : ""}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/technologies" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
