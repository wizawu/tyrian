declare namespace javax {
    namespace management {
        namespace modelmbean {
            interface ModelMBeanInfo {
                getDescriptors(arg0: java.lang.String | string): javax.management.Descriptor[]
                setDescriptors(arg0: javax.management.Descriptor[]): void
                getDescriptor(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.Descriptor
                setDescriptor(arg0: javax.management.Descriptor, arg1: java.lang.String | string): void
                getMBeanDescriptor(): javax.management.Descriptor
                setMBeanDescriptor(arg0: javax.management.Descriptor): void
                getAttribute(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanAttributeInfo
                getOperation(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo
                getNotification(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanNotificationInfo
                clone(): java.lang.Object
                getAttributes(): javax.management.MBeanAttributeInfo[]
                getClassName(): string
                getConstructors(): javax.management.MBeanConstructorInfo[]
                getDescription(): string
                getNotifications(): javax.management.MBeanNotificationInfo[]
                getOperations(): javax.management.MBeanOperationInfo[]
            }
        }
    }
}