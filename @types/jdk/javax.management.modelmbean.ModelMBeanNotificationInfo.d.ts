declare namespace javax {
  namespace management {
    namespace modelmbean {

      class ModelMBeanNotificationInfo extends javax.management.MBeanNotificationInfo implements javax.management.DescriptorAccess {
        public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.String | string, arg2: java.lang.String | string)
        public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.management.Descriptor)
        public constructor(arg0: javax.management.modelmbean.ModelMBeanNotificationInfo)
        public clone(): java.lang.Object
        public getDescriptor(): javax.management.Descriptor
        public setDescriptor(arg0: javax.management.Descriptor): void
        public toString(): java.lang.String
      }

    }
  }
}
