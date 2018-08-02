declare namespace org {
    namespace omg {
        namespace stub {
            namespace javax {
                namespace management {
                    namespace remote {
                        namespace rmi {
                            class _RMIConnection_Stub extends javax.rmi.CORBA.Stub implements javax.management.remote.rmi.RMIConnection {
                                public constructor()
                                public _ids(): java.lang.String[]
                                public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                                public addNotificationListeners(arg0: javax.management.ObjectName[], arg1: java.rmi.MarshalledObject[], arg2: javax.security.auth.Subject[]): java.lang.Integer[]
                                public close(): void
                                public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): javax.management.ObjectInstance
                                public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.rmi.MarshalledObject, arg4: java.lang.String[], arg5: javax.security.auth.Subject): javax.management.ObjectInstance
                                public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: javax.security.auth.Subject): javax.management.ObjectInstance
                                public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): javax.management.ObjectInstance
                                public fetchNotifications(arg0: long, arg1: int, arg2: long): javax.management.remote.NotificationResult
                                public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): java.lang.Object
                                public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[], arg2: javax.security.auth.Subject): javax.management.AttributeList
                                public getConnectionId(): string
                                public getDefaultDomain(arg0: javax.security.auth.Subject): string
                                public getDomains(arg0: javax.security.auth.Subject): java.lang.String[]
                                public getMBeanCount(arg0: javax.security.auth.Subject): java.lang.Integer
                                public getMBeanInfo(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.MBeanInfo
                                public getObjectInstance(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.ObjectInstance
                                public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[], arg4: javax.security.auth.Subject): java.lang.Object
                                public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): boolean
                                public isRegistered(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): boolean
                                public queryMBeans(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set
                                public queryNames(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set
                                public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
                                public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
                                public removeNotificationListeners(arg0: javax.management.ObjectName, arg1: java.lang.Integer[], arg2: javax.security.auth.Subject): void
                                public setAttribute(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): void
                                public setAttributes(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): javax.management.AttributeList
                                public unregisterMBean(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}