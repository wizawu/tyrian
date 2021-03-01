declare namespace javax {
  namespace management {

    class MBeanAttributeInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {

      static readonly NO_ATTRIBUTES: javax.management.MBeanAttributeInfo[]
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: boolean, arg4: boolean, arg5: boolean)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: boolean, arg4: boolean, arg5: boolean, arg6: javax.management.Descriptor)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method)
      public clone(): java.lang.Object
      public getType(): java.lang.String
      public isReadable(): boolean
      public isWritable(): boolean
      public isIs(): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}
