declare namespace javax {
  namespace management {

    interface NotificationListener$$lambda {
      (arg0: javax.management.Notification, arg1: java.lang.Object): void
    }

    interface NotificationListener extends java.util.EventListener {
      handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
    }

  }
}
