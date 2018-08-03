declare namespace sun {
    namespace management {
        class DiagnosticCommandImpl extends sun.management.NotificationEmitterSupport implements com.sun.management.DiagnosticCommandMBean {
            public getAttribute(arg0: java.lang.String | string): java.lang.Object
            public setAttribute(arg0: javax.management.Attribute): void
            public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
            public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
            public getMBeanInfo(): javax.management.MBeanInfo
            public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            public addNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda): void
            public removeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$Lambda, arg2: java.lang.Object): void
            public static class: java.lang.Class<any>
        }
    }
}