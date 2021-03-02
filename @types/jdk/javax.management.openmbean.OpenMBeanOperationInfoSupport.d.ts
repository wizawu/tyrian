declare namespace javax {
  namespace management {
    namespace openmbean {

      class OpenMBeanOperationInfoSupport extends javax.management.MBeanOperationInfo implements javax.management.openmbean.OpenMBeanOperationInfo {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<unknown>, arg4: int)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<unknown>, arg4: int, arg5: javax.management.Descriptor)
        public getReturnOpenType(): javax.management.openmbean.OpenType<unknown>
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
