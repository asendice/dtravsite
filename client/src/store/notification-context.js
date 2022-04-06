import React, { useContext, useState, useEffect } from "react";

const NotificationContext = React.createContext({
  notification: null,
  showNotification: function(notificationData) {},
  hideNotification: function() {}
})

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({children}){

  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(data) {
    setActiveNotification(data)
  }
  function hideNotificationHandler() {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}