declare namespace javax {
  namespace management {
    namespace modelmbean {
      interface ModelMBean
        extends javax.management.DynamicMBean,
          javax.management.PersistentMBean,
          javax.management.modelmbean.ModelMBeanNotificationBroadcaster {
        setModelMBeanInfo(arg0: javax.management.modelmbean.ModelMBeanInfo): void
        setManagedResource(arg0: java.lang.Object | any, arg1: java.lang.String | string): void
      }
    }
  }
}
