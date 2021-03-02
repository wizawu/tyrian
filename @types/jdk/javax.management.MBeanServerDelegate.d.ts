declare namespace javax {
  namespace management {

    class MBeanServerDelegate implements javax.management.MBeanServerDelegateMBean, javax.management.NotificationEmitter {
      public static readonly DELEGATE_NAME: javax.management.ObjectName
      public constructor()
      public getMBeanServerId(): java.lang.String
      public getSpecificationName(): java.lang.String
      public getSpecificationVersion(): java.lang.String
      public getSpecificationVendor(): java.lang.String
      public getImplementationName(): java.lang.String
      public getImplementationVersion(): java.lang.String
      public getImplementationVendor(): java.lang.String
      public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
      public addNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
      public removeNotificationListener(arg0: javax.management.NotificationListener, arg1: javax.management.NotificationFilter, arg2: java.lang.Object): void
      public removeNotificationListener(arg0: javax.management.NotificationListener): void
      public sendNotification(arg0: javax.management.Notification): void
    }

  }
}
