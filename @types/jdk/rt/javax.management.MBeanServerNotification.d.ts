declare namespace javax {
    namespace management {
        class MBeanServerNotification extends javax.management.Notification {
            public static REGISTRATION_NOTIFICATION: string
            public static UNREGISTRATION_NOTIFICATION: string
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: javax.management.ObjectName)
            public getMBeanName(): javax.management.ObjectName
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}