declare namespace javax {
  namespace management {

    class MBeanConstructorInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
      static readonly serialVersionUID: long
      static readonly NO_CONSTRUCTORS: javax.management.MBeanConstructorInfo[]
      public constructor(arg0: java.lang.String, arg1: java.lang.reflect.Constructor<unknown>)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.MBeanParameterInfo[])
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.MBeanParameterInfo[], arg3: javax.management.Descriptor)
      public clone(): java.lang.Object
      public getSignature(): javax.management.MBeanParameterInfo[]
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}
