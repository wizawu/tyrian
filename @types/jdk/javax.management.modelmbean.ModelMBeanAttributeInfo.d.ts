declare namespace javax {
  namespace management {
    namespace modelmbean {

      class ModelMBeanAttributeInfo extends javax.management.MBeanAttributeInfo implements javax.management.DescriptorAccess {
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method, arg4: javax.management.Descriptor)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean, arg5: boolean | java.lang.Boolean)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean, arg5: boolean | java.lang.Boolean, arg6: javax.management.Descriptor)
        public constructor(arg0: javax.management.modelmbean.ModelMBeanAttributeInfo)
        public getDescriptor(): javax.management.Descriptor
        public setDescriptor(arg0: javax.management.Descriptor): void
        public clone(): java.lang.Object
        public toString(): java.lang.String
      }

    }
  }
}
