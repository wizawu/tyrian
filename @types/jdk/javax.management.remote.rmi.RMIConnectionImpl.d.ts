declare namespace javax {
  namespace management {
    namespace remote {
      namespace rmi {
        class RMIConnectionImpl implements javax.management.remote.rmi.RMIConnection, java.rmi.server.Unreferenced {
          public constructor(
            arg0: javax.management.remote.rmi.RMIServerImpl,
            arg1: java.lang.String | string,
            arg2: java.lang.ClassLoader,
            arg3: javax.security.auth.Subject,
            arg4: java.util.Map<java.lang.String, unknown>
          )
          public getConnectionId(): java.lang.String
          public close(): void
          public unreferenced(): void
          public createMBean(
            arg0: java.lang.String | string,
            arg1: javax.management.ObjectName,
            arg2: javax.security.auth.Subject
          ): javax.management.ObjectInstance
          public createMBean(
            arg0: java.lang.String | string,
            arg1: javax.management.ObjectName,
            arg2: javax.management.ObjectName,
            arg3: javax.security.auth.Subject
          ): javax.management.ObjectInstance
          public createMBean(
            arg0: java.lang.String | string,
            arg1: javax.management.ObjectName,
            arg2: java.rmi.MarshalledObject,
            arg3: java.lang.String[] | string[],
            arg4: javax.security.auth.Subject
          ): javax.management.ObjectInstance
          public createMBean(
            arg0: java.lang.String | string,
            arg1: javax.management.ObjectName,
            arg2: javax.management.ObjectName,
            arg3: java.rmi.MarshalledObject,
            arg4: java.lang.String[] | string[],
            arg5: javax.security.auth.Subject
          ): javax.management.ObjectInstance
          public unregisterMBean(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): void
          public getObjectInstance(
            arg0: javax.management.ObjectName,
            arg1: javax.security.auth.Subject
          ): javax.management.ObjectInstance
          public queryMBeans(
            arg0: javax.management.ObjectName,
            arg1: java.rmi.MarshalledObject,
            arg2: javax.security.auth.Subject
          ): java.util.Set<javax.management.ObjectInstance>
          public queryNames(
            arg0: javax.management.ObjectName,
            arg1: java.rmi.MarshalledObject,
            arg2: javax.security.auth.Subject
          ): java.util.Set<javax.management.ObjectName>
          public isRegistered(arg0: javax.management.ObjectName, arg1: javax.security.auth.Subject): boolean
          public getMBeanCount(arg0: javax.security.auth.Subject): number
          public getAttribute(
            arg0: javax.management.ObjectName,
            arg1: java.lang.String | string,
            arg2: javax.security.auth.Subject
          ): java.lang.Object
          public getAttributes(
            arg0: javax.management.ObjectName,
            arg1: java.lang.String[] | string[],
            arg2: javax.security.auth.Subject
          ): javax.management.AttributeList
          public setAttribute(
            arg0: javax.management.ObjectName,
            arg1: java.rmi.MarshalledObject,
            arg2: javax.security.auth.Subject
          ): void
          public setAttributes(
            arg0: javax.management.ObjectName,
            arg1: java.rmi.MarshalledObject,
            arg2: javax.security.auth.Subject
          ): javax.management.AttributeList
          public invoke(
            arg0: javax.management.ObjectName,
            arg1: java.lang.String | string,
            arg2: java.rmi.MarshalledObject,
            arg3: java.lang.String[] | string[],
            arg4: javax.security.auth.Subject
          ): java.lang.Object
          public getDefaultDomain(arg0: javax.security.auth.Subject): java.lang.String
          public getDomains(arg0: javax.security.auth.Subject): java.lang.String[]
          public getMBeanInfo(
            arg0: javax.management.ObjectName,
            arg1: javax.security.auth.Subject
          ): javax.management.MBeanInfo
          public isInstanceOf(
            arg0: javax.management.ObjectName,
            arg1: java.lang.String | string,
            arg2: javax.security.auth.Subject
          ): boolean
          public addNotificationListeners(
            arg0: javax.management.ObjectName[],
            arg1: java.rmi.MarshalledObject[],
            arg2: javax.security.auth.Subject[]
          ): number[]
          public addNotificationListener(
            arg0: javax.management.ObjectName,
            arg1: javax.management.ObjectName,
            arg2: java.rmi.MarshalledObject,
            arg3: java.rmi.MarshalledObject,
            arg4: javax.security.auth.Subject
          ): void
          public removeNotificationListeners(
            arg0: javax.management.ObjectName,
            arg1: number[] | java.lang.Integer[],
            arg2: javax.security.auth.Subject
          ): void
          public removeNotificationListener(
            arg0: javax.management.ObjectName,
            arg1: javax.management.ObjectName,
            arg2: javax.security.auth.Subject
          ): void
          public removeNotificationListener(
            arg0: javax.management.ObjectName,
            arg1: javax.management.ObjectName,
            arg2: java.rmi.MarshalledObject,
            arg3: java.rmi.MarshalledObject,
            arg4: javax.security.auth.Subject
          ): void
          public fetchNotifications(
            arg0: number | java.lang.Long,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Long
          ): javax.management.remote.NotificationResult
          public toString(): java.lang.String
        }
      }
    }
  }
}
