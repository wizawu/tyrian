declare namespace javax {
  namespace management {
    interface NotificationBroadcaster {
      addNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
        arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
        arg2: java.lang.Object | any
      ): void
      removeNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda
      ): void
      getNotificationInfo(): javax.management.MBeanNotificationInfo[]
    }
  }
}
