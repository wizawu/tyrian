declare namespace javax {
    namespace management {
        namespace openmbean {
            interface OpenMBeanInfo {
                getClassName(): string
                getDescription(): string
                getAttributes(): javax.management.MBeanAttributeInfo[]
                getOperations(): javax.management.MBeanOperationInfo[]
                getConstructors(): javax.management.MBeanConstructorInfo[]
                getNotifications(): javax.management.MBeanNotificationInfo[]
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                toString(): string
            }
        }
    }
}