declare namespace javax {
  namespace management {

    interface MBeanServerConnection {

      createMBean(arg0: java.lang.String, arg1: javax.management.ObjectName): javax.management.ObjectInstance
      createMBean(arg0: java.lang.String, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName): javax.management.ObjectInstance
      createMBean(arg0: java.lang.String, arg1: javax.management.ObjectName, arg2: java.lang.Object[], arg3: java.lang.String[]): javax.management.ObjectInstance
      createMBean(arg0: java.lang.String, arg1: javax.management.ObjectName, arg2: javax.management.ObjectName, arg3: java.lang.Object[], arg4: java.lang.String[]): javax.management.ObjectInstance
      unregisterMBean(arg0: javax.management.ObjectName): void
      getObjectInstance(arg0: javax.management.ObjectName): javax.management.ObjectInstance
      queryMBeans(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>
      queryNames(arg0: javax.management.ObjectName, arg1: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>
      isRegistered(arg0: javax.management.ObjectName): boolean
      getMBeanCount(): java.lang.Integer
      getAttribute(arg0: javax.management.ObjectName, arg1: java.lang.String): java.lang.Object
      getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
      setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
      setAttributes(arg0: javax.management.ObjectName, arg1: javax.management.AttributeList): javax.management.AttributeList
      invoke(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
      getDefaultDomain(): java.lang.String
      getDomains(): java.lang.String[]
      addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
      addNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
      removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName): void
      removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.ObjectName, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
      removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener): void
      removeNotificationListener(arg0: javax.management.ObjectName, arg1: javax.management.NotificationListener, arg2: javax.management.NotificationFilter, arg3: java.lang.Object): void
      getMBeanInfo(arg0: javax.management.ObjectName): javax.management.MBeanInfo
      isInstanceOf(arg0: javax.management.ObjectName, arg1: java.lang.String): boolean
    }

  }
}
