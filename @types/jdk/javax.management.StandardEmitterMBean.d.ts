declare namespace javax {
  namespace management {
    class StandardEmitterMBean extends javax.management.StandardMBean implements javax.management.NotificationEmitter {
      public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: javax.management.NotificationEmitter)
      public constructor(
        arg0: T,
        arg1: java.lang.Class<T>,
        arg2: boolean | java.lang.Boolean,
        arg3: javax.management.NotificationEmitter
      )
      protected constructor(arg0: java.lang.Class<unknown>, arg1: javax.management.NotificationEmitter)
      protected constructor(
        arg0: java.lang.Class<unknown>,
        arg1: boolean | java.lang.Boolean,
        arg2: javax.management.NotificationEmitter
      )
      public removeNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda
      ): void
      public removeNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
        arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
        arg2: java.lang.Object | any
      ): void
      public addNotificationListener(
        arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
        arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
        arg2: java.lang.Object | any
      ): void
      public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
      public sendNotification(arg0: javax.management.Notification): void
      getNotifications(arg0: javax.management.MBeanInfo): javax.management.MBeanNotificationInfo[]
    }
  }
}
