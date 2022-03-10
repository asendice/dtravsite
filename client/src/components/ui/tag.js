import classes from "./tag.module.css";

function Tags(props) {
  const { title, setFilter, filter } = props;

  let style = "";
  if(filter === title){
    style = "#373737"
  }

  return (
    <div onClick={() => setFilter(title)} className={classes.container} style={{backgroundColor: style}}>
      {title}
    </div>
  )
}

export default Tags;