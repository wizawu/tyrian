declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {

        class RMIConnectionImpl_Stub extends java.rmi.server.RemoteStub implements javax.management.remote.rmi.RMIConnection {
          static class$javax$management$remote$rmi$RMIConnection: java.lang.Class
          static class$javax$management$ObjectName: java.lang.Class
          static class$java$rmi$MarshalledObject: java.lang.Class
          static class$javax$security$auth$Subject: java.lang.Class
          static array$Ljavax$management$ObjectName: java.lang.Class
          static array$Ljava$rmi$MarshalledObject: java.lang.Class
          static array$Ljavax$security$auth$Subject: java.lang.Class
          static class$java$lang$AutoCloseable: java.lang.Class
          static class$java$lang$String: java.lang.Class
          static array$Ljava$lang$String: java.lang.Class
          static array$Ljava$lang$Integer: java.lang.Class
          public constructor(arg0: java.rmi.server.RemoteRef)
          public addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
          public addNotificationListeners(arg0: javax.management.ObjectName[], arg1: java.rmi.MarshalledObject[], arg2: javax.security.auth.Subject[]): number[]
          static class$(arg0: java.lang.String | string): java.lang.Class
          public close(): void
          public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[] | string[], arg4: javax.security.auth.Subject): javax.management.ObjectInstance
          public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.rmi.MarshalledObject, arg4: java.lang.String[] | string[], arg5: javax.security.auth.Subject): javax.management.ObjectInstance
          public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: javax.security.auth.Subject): javax.management.ObjectInstance
          public createMBean(arg0: java.lang.String | string, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): javax.management.ObjectInstance
          public fetchNotifications(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: number | java.lang.Long): javax.management.remote.NotificationResult
          public getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): java.lang.Object
          public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[] | string[], arg2: javax.security.auth.Subject): javax.management.AttributeList
          public getConnectionId(): java.lang.String
          public getDefaultDomain(arg0: javax.security.auth.Subject): java.lang.String
          public getDomains(arg0: javax.security.auth.Subject): java.lang.String[]
          public getMBeanCount(arg0: javax.security.auth.Subject): number
          public getMBeanInfo(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.MBeanInfo
          public getObjectInstance(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): javax.management.ObjectInstance
          public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject, arg3: java.lang.String[] | string[], arg4: javax.security.auth.Subject): java.lang.Object
          public isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: javax.security.auth.Subject): boolean
          public isRegistered(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): boolean
          public queryMBeans(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set
          public queryNames(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): java.util.Set
          public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: java.rmi.MarshalledObject, arg3: java.rmi.MarshalledObject, arg4: javax.security.auth.Subject): void
          public removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.security.auth.Subject): void
          public removeNotificationListeners(arg0: javax.management.ObjectName, arg1: number[] | java.lang.Integer[], arg2: javax.security.auth.Subject): void
          public setAttribute(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): void
          public setAttributes(arg0: javax.management.ObjectName, arg1: java.rmi.MarshalledObject, arg2: javax.security.auth.Subject): javax.management.AttributeList
          public unregisterMBean(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): void
        }

      }
    }
  }
}
