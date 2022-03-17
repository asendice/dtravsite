import classes from "./tech.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaBootstrap,
  FaNpm,
  FaGithub,
} from "react-icons/fa";
import { DiReact, DiFirebase } from "react-icons/di";
import {
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import Footer from "../footer/footer";

const TECHNOLOGIES = [
  {
    icon: <DiReact size={50} color="grey" />,
    name: "React",
  },
  {
    icon: <DiReact size={50} color="grey" />,
    name: "React-Native",
  },
  {
    icon: <SiRedux size={50} color="grey" />,
    name: "Redux",
  },
  {
    icon: <SiJavascript size={50} color="grey" />,
    name: "Javascipt",
  },
  {
    icon: <FaHtml5 size={50} className="icon" color="grey" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt size={50} color="grey" />,
    name: "CSS",
  },
  {
    icon: <FaSass size={50} color="grey" />,
    name: "Sass",
  },
  {
    icon: <FaBootstrap size={50} color="grey" />,
    name: "Bootstrap",
  },
  {
    icon: <SiTailwindcss size={50} color="grey" />,
    name: "Tailwind Css",
  },
  {
    icon: <FaNodeJs size={50} color="grey" />,
    name: "Node JS",
  },
  {
    icon: <SiMongodb size={50} color="grey" />,
    name: "Mongo DB",
  },
  {
    icon: <DiFirebase size={50} color="grey" />,
    name: "Firebase",
  },
  {
    icon: <FaNpm size={50} color="grey" />,
    name: "NPM",
  },
  {
    icon: <FaGithub size={50} color="grey" />,
    name: "Github",
  },
];

function Tech() {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>Tech Stack</h1>
        <p>Technologies that I am actively using and building projects with</p>
      </div>

      <div className={classes.techContainer}>
        {TECHNOLOGIES.map((item, index) => {
          return (
            <div key={index} className={classes.iconContainer}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Tech;
