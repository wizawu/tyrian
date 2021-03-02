declare namespace javax {
  namespace management {

    class MBeanInfo implements java.lang.Cloneable, java.io.Serializable, javax.management.DescriptorRead {
      static readonly serialVersionUID: long
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanAttributeInfo[], arg3: javax.management.MBeanConstructorInfo[], arg4: javax.management.MBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[])
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.MBeanAttributeInfo[], arg3: javax.management.MBeanConstructorInfo[], arg4: javax.management.MBeanOperationInfo[], arg5: javax.management.MBeanNotificationInfo[], arg6: javax.management.Descriptor)
      public clone(): java.lang.Object
      public getClassName(): java.lang.String
      public getDescription(): java.lang.String
      public getAttributes(): javax.management.MBeanAttributeInfo[]
      public getOperations(): javax.management.MBeanOperationInfo[]
      public getConstructors(): javax.management.MBeanConstructorInfo[]
      public getNotifications(): javax.management.MBeanNotificationInfo[]
      public getDescriptor(): javax.management.Descriptor
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      static arrayGettersSafe(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
    }

  }
}
