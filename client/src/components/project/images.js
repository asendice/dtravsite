import { useState } from "react";
import classes from "./images.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function Images(props) {
  const [imgIndex, setImgIndex] = useState(0);
  const { images } = props;

  console.log(images, "images")

  function onRightArrowClick() {
    if (imgIndex < images.length - 1) {
      setImgIndex((prevState) => prevState + 1);
    } else if (imgIndex === images.length - 1) {
      setImgIndex(0);
    }
  }
  function onLeftArrowClick() {
    if (imgIndex >= 1) {
      setImgIndex((prevState) => prevState - 1);
    } else {
      setImgIndex(images.length - 1);
    }
  }

  function carousel(index) {
    if (imgIndex === index) {
      return classes.active;
    }

    if (imgIndex === images.length - 1 && index === 0){
      return classes.next;
    }

    if(imgIndex === 0 && index === images.length -1){
      return classes.prev;
    }

    if (imgIndex + 1 === index) {
      return classes.next;
    }

    if (imgIndex - 1 === index){
      return classes.prev;
    }
  }

  return (
    <div className={classes.container}>
      <button
        className={`${classes.arrow} ${classes.left}`}
        onClick={() => onLeftArrowClick()}
      >
        <BsArrowLeftShort />
      </button>
      {images && images.map((img, index) => {
        return (
          <div
            key={img}
            className={`${classes.imagecontainer} ${carousel(index)}`}
          >
            <img
              className={classes.image}
              alt={img}
              src={img}
              key={index}
            />
          </div>
        );
      })}
      <button
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => onRightArrowClick()}
      >
        <BsArrowRightShort />
      </button>
    </div>
  );
}

export default Images;
