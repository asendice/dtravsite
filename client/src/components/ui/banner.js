import classes from "./banner.module.css";

function Banner(props){
  const {title} = props;
  return (
    <div className={classes.container}>
    <a className={classes.banner}>
      {title}
    </a>

    </div>
  )

}

export default Banner;