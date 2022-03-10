import classes from "./burger.module.css"


function Burger(props) {
  if(props.open){
    return (
      <div onClick={() => props.setOpen(!props.open)} className={classes.closeContainer}>
        <div className={`${classes.closeLine} ${classes.left}`}></div>
        <div className={`${classes.closeLine} ${classes.right}`}></div>
      </div>
    )
  }
  return (
    <div onClick={() => props.setOpen(!props.open)} className={classes.container}>
      <div className={`${classes.line} ${classes.top}`}></div>
      <div className={classes.line}></div>
      <div className={`${classes.line} ${classes.bottom}`}></div>
    </div>
  )
}

export default Burger;