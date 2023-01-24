declare namespace javax {
  namespace management {
    class MBeanServerNotification extends javax.management.Notification {
      public static readonly REGISTRATION_NOTIFICATION: java.lang.String
      public static readonly UNREGISTRATION_NOTIFICATION: java.lang.String
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Long,
        arg3: javax.management.ObjectName
      )
      public getMBeanName(): javax.management.ObjectName
      public toString(): java.lang.String
    }
  }
}
