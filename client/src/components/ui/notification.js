import classes from "./notification.module.css";
import { useNotification } from "../../store/notification-context";

function Notification(props) {
  const notification = useNotification();
  const { status, message } = props;

  console.log(status, message);

  return (
    <div className={classes.container}>
      <div
        onClick={notification.hideNotification}
        className={classes.notification}
      >
        <div className={`${classes.status} ${classes[status]}`}></div>
        <h4>{message}</h4>
      </div>
    </div>
  );
}

export default Notification;
