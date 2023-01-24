declare namespace javax {
  namespace management {
    class MBeanServerInvocationHandler implements java.lang.reflect.InvocationHandler {
      public constructor(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName)
      public constructor(
        arg0: javax.management.MBeanServerConnection,
        arg1: javax.management.ObjectName,
        arg2: boolean | java.lang.Boolean
      )
      public getMBeanServerConnection(): javax.management.MBeanServerConnection
      public getObjectName(): javax.management.ObjectName
      public isMXBean(): boolean
      public static newProxyInstance<T>(
        arg0: javax.management.MBeanServerConnection,
        arg1: javax.management.ObjectName,
        arg2: java.lang.Class<T>,
        arg3: boolean | java.lang.Boolean
      ): T
      public invoke(
        arg0: java.lang.Object | any,
        arg1: java.lang.reflect.Method,
        arg2: java.lang.Object[] | any[]
      ): java.lang.Object
    }
  }
}
