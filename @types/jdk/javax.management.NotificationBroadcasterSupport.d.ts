declare namespace javax {
  namespace management {
    class NotificationBroadcasterSupport implements javax.management.NotificationEmitter {
      public constructor()
      public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda)
      public constructor(...vargs: javax.management.MBeanNotificationInfo[])
      public constructor(
        arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda,
        ...vargs: javax.management.MBeanNotificationInfo[]
      )
      public addNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
        arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
        arg2: java.lang.Object | any
      ): void
      public removeNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda
      ): void
      public removeNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
        arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
        arg2: java.lang.Object | any
      ): void
      public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
      public sendNotification(arg0: javax.management.Notification): void
      protected handleNotification(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
        arg1: javax.management.Notification,
        arg2: java.lang.Object | any
      ): void
    }
  }
}
