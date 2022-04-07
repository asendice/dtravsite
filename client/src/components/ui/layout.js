import classes from "./layout.module.css";
import Nav from "../nav/nav";
import Banner from "./banner";
import Notification from "./notification";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNotification } from "../../store/notification-context";

function Layout(props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const notificationContext = useNotification();
  const notification = notificationContext.notification;
  const onAboutPage = pathname === "/";

  return (
    <div className={`${onAboutPage ? "" : classes.layout}`}>
      <Banner title="LATEST LIVE APP" />
      <Nav setOpen={setOpen} open={open} />
      {props.children}
      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
        />
      )}
    </div>
  );
}

export default Layout;
