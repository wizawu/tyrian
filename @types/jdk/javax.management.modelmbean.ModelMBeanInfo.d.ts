declare namespace javax {
  namespace management {
    namespace modelmbean {

      interface ModelMBeanInfo {
        getDescriptors(arg0: java.lang.String): javax.management.Descriptor[]
        setDescriptors(arg0: javax.management.Descriptor[]): void
        getDescriptor(arg0: java.lang.String, arg1: java.lang.String): javax.management.Descriptor
        setDescriptor(arg0: javax.management.Descriptor, arg1: java.lang.String): void
        getMBeanDescriptor(): javax.management.Descriptor
        setMBeanDescriptor(arg0: javax.management.Descriptor): void
        getAttribute(arg0: java.lang.String): javax.management.modelmbean.ModelMBeanAttributeInfo
        getOperation(arg0: java.lang.String): javax.management.modelmbean.ModelMBeanOperationInfo
        getNotification(arg0: java.lang.String): javax.management.modelmbean.ModelMBeanNotificationInfo
        clone(): java.lang.Object
        getAttributes(): javax.management.MBeanAttributeInfo[]
        getClassName(): java.lang.String
        getConstructors(): javax.management.MBeanConstructorInfo[]
        getDescription(): java.lang.String
        getNotifications(): javax.management.MBeanNotificationInfo[]
        getOperations(): javax.management.MBeanOperationInfo[]
      }

    }
  }
}
