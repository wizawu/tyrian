declare namespace javax {
  namespace management {

    interface NotificationFilter$$lambda {
      (arg0: javax.management.Notification): boolean
    }

    interface NotificationFilter extends java.io.Serializable {
      isNotificationEnabled(arg0: javax.management.Notification): boolean
    }

  }
}
