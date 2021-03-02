declare namespace javax {
  namespace management {
    namespace modelmbean {

      class ModelMBeanConstructorInfo extends javax.management.MBeanConstructorInfo implements javax.management.DescriptorAccess {
        public constructor(arg0: java.lang.String, arg1: java.lang.reflect.Constructor<unknown>)
        public constructor(arg0: java.lang.String, arg1: java.lang.reflect.Constructor<unknown>, arg2: javax.management.Descriptor)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.MBeanParameterInfo[])
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.MBeanParameterInfo[], arg3: javax.management.Descriptor)
        constructor(arg0: javax.management.modelmbean.ModelMBeanConstructorInfo)
        public clone(): java.lang.Object
        public getDescriptor(): javax.management.Descriptor
        public setDescriptor(arg0: javax.management.Descriptor): void
        public toString(): java.lang.String
      }

    }
  }
}
