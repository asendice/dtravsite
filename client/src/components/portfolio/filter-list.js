import classes from "./filter-list.module.css";
import Tag from "../ui/tag";
const DUMMY_DATA = [
  'Show All', 'React', 'React-Native', 'Redux', 'CSS', 'SASS', 'Next.JS', 'Node.JS', "MongoDB", "Express"
]


function FilterList(props) {
  const { setFilter, filter } = props;
  return (
    <div className={classes.container}>
      {DUMMY_DATA.map((skill, index) => (
        <Tag key={index} title={skill} setFilter={setFilter} filter={filter} />
      ))}
    </div>
  )
}

export default FilterList;

