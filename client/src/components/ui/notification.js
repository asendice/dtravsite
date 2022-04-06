import classes from "./notification.module.css";
import { useNotification } from "../../store/notification-context";

function Notification(props){

  const notification = useNotification();
  const { status, message } = props;

  console.log(status, message)

  return (
    <div onClick={notification.hideNotification} className={classes.container}>
      <div className={`${classes.status} ${classes[status]}`}></div>
      {message}
    </div>
  )

}

export default Notification;