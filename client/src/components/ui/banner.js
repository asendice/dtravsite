import classes from "./banner.module.css";

function Banner(props) {
  const { title } = props;
  return (
    <div className={classes.container}>
      <a
        href="https://oneclick-dt.herokuapp.com"
        rel="noopener noreferrer"
        target="_blank"
        className={classes.banner}
      >
        {title}
      </a>
    </div>
  );
}

export default Banner;
