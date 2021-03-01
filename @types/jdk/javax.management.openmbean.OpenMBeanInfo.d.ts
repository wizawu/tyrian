declare namespace javax {
  namespace management {
    namespace openmbean {

      interface OpenMBeanInfo {

        getClassName(): java.lang.String
        getDescription(): java.lang.String
        getAttributes(): javax.management.MBeanAttributeInfo[]
        getOperations(): javax.management.MBeanOperationInfo[]
        getConstructors(): javax.management.MBeanConstructorInfo[]
        getNotifications(): javax.management.MBeanNotificationInfo[]
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
      }

    }
  }
}
