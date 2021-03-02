declare namespace javax {
  namespace management {
    namespace openmbean {

      class OpenMBeanOperationInfoSupport extends javax.management.MBeanOperationInfo implements javax.management.openmbean.OpenMBeanOperationInfo {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<unknown>, arg4: number | java.lang.Integer)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.OpenMBeanParameterInfo[], arg3: javax.management.openmbean.OpenType<unknown>, arg4: number | java.lang.Integer, arg5: javax.management.Descriptor)
        public getReturnOpenType(): javax.management.openmbean.OpenType<unknown>
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }

    }
  }
}
