declare namespace javax {
  namespace management {
    namespace openmbean {

      class OpenMBeanInfoSupport extends javax.management.MBeanInfo implements javax.management.openmbean.OpenMBeanInfo {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenMBeanAttributeInfo[], arg3: javax.management.openmbean.OpenMBeanConstructorInfo[], arg4: javax.management.openmbean.OpenMBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[])
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenMBeanAttributeInfo[], arg3: javax.management.openmbean.OpenMBeanConstructorInfo[], arg4: javax.management.openmbean.OpenMBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[], arg6: javax.management.Descriptor)
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
