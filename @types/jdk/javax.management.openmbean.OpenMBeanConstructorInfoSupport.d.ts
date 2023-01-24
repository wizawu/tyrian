declare namespace javax {
  namespace management {
    namespace openmbean {
      class OpenMBeanConstructorInfoSupport
        extends javax.management.MBeanConstructorInfo
        implements javax.management.openmbean.OpenMBeanConstructorInfo
      {
        static readonly serialVersionUID: long
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: javax.management.openmbean.OpenMBeanParameterInfo[]
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: javax.management.openmbean.OpenMBeanParameterInfo[],
          arg3: javax.management.Descriptor
        )
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
