declare namespace javax {
  namespace management {
    namespace modelmbean {

      class ModelMBeanInfoSupport extends javax.management.MBeanInfo implements javax.management.modelmbean.ModelMBeanInfo {
        public constructor(arg0: javax.management.modelmbean.ModelMBeanInfo)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.modelmbean.ModelMBeanAttributeInfo[], arg3: javax.management.modelmbean.ModelMBeanConstructorInfo[], arg4: javax.management.modelmbean.ModelMBeanOperationInfo[], arg5: javax.management.modelmbean.ModelMBeanNotificationInfo[])
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.modelmbean.ModelMBeanAttributeInfo[], arg3: javax.management.modelmbean.ModelMBeanConstructorInfo[], arg4: javax.management.modelmbean.ModelMBeanOperationInfo[], arg5: javax.management.modelmbean.ModelMBeanNotificationInfo[], arg6: javax.management.Descriptor)
        public clone(): java.lang.Object
        public getDescriptors(arg0: java.lang.String | string): javax.management.Descriptor[]
        public setDescriptors(arg0: javax.management.Descriptor[]): void
        public getDescriptor(arg0: java.lang.String | string): javax.management.Descriptor
        public getDescriptor(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.Descriptor
        public setDescriptor(arg0: javax.management.Descriptor, arg1: java.lang.String | string): void
        public getAttribute(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanAttributeInfo
        public getOperation(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo
        public getConstructor(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanConstructorInfo
        public getNotification(arg0: java.lang.String | string): javax.management.modelmbean.ModelMBeanNotificationInfo
        public getDescriptor(): javax.management.Descriptor
        public getMBeanDescriptor(): javax.management.Descriptor
        public setMBeanDescriptor(arg0: javax.management.Descriptor): void
      }

    }
  }
}
