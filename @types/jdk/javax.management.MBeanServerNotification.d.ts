declare namespace javax {
  namespace management {

    class MBeanServerNotification extends javax.management.Notification {

      public static readonly REGISTRATION_NOTIFICATION: java.lang.String
      public static readonly UNREGISTRATION_NOTIFICATION: java.lang.String
      public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: long, arg3: javax.management.ObjectName)
      public getMBeanName(): javax.management.ObjectName
      public toString(): java.lang.String
    }

  }
}
