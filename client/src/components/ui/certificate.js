import classes from "./certificate.module.css";

function Certificate(props) {

  const { link } = props;
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={classes.container}
    >
      <p className={classes.nucamp}>nucamp certificate</p>
      {props.children}
      <p style={{ marginLeft: "80%" }}>2020</p>
    </a>
  );
}

export default Certificate;
