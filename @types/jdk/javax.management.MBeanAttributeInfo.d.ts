declare namespace javax {
  namespace management {

    class MBeanAttributeInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
      static readonly NO_ATTRIBUTES: javax.management.MBeanAttributeInfo[]
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean, arg5: boolean | java.lang.Boolean)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean, arg5: boolean | java.lang.Boolean, arg6: javax.management.Descriptor)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method)
      public clone(): java.lang.Object
      public getType(): java.lang.String
      public isReadable(): boolean
      public isWritable(): boolean
      public isIs(): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
