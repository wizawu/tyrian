declare namespace javax {
  namespace management {
    namespace modelmbean {
      class ModelMBeanOperationInfo
        extends javax.management.MBeanOperationInfo
        implements javax.management.DescriptorAccess
      {
        public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method)
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.reflect.Method,
          arg2: javax.management.Descriptor
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: javax.management.MBeanParameterInfo[],
          arg3: java.lang.String | string,
          arg4: number | java.lang.Integer
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: javax.management.MBeanParameterInfo[],
          arg3: java.lang.String | string,
          arg4: number | java.lang.Integer,
          arg5: javax.management.Descriptor
        )
        public constructor(arg0: javax.management.modelmbean.ModelMBeanOperationInfo)
        public clone(): java.lang.Object
        public getDescriptor(): javax.management.Descriptor
        public setDescriptor(arg0: javax.management.Descriptor): void
        public toString(): java.lang.String
      }
    }
  }
}
