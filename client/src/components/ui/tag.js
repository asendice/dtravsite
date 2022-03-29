import classes from "./tag.module.css";

function Tags(props) {
  const { title, setFilter, filter } = props;

  let style = "";
  if(filter === title){
    style = "#373737"
  }

  let showAll = "";
  if(filter === ""){
    showAll = "#373737"
  }

  if(title === "Show All"){
    return(
      <div onClick={() => setFilter("")} className={classes.container} style={{backgroundColor: showAll}}>
      {title}
    </div>
    )
  }

  return (
    <div onClick={() => setFilter(title)} className={classes.container} style={{backgroundColor: style}}>
      {title}
    </div>
  )
}

export default Tags;