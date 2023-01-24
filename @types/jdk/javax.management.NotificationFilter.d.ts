declare namespace javax {
  namespace management {
    interface NotificationFilter$$lambda {
      (arg0: javax.management.Notification): boolean | java.lang.Boolean
    }

    interface NotificationFilter extends java.io.Serializable {
      isNotificationEnabled(arg0: javax.management.Notification): boolean
    }
  }
}
