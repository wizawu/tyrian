declare namespace javax {
  namespace management {
    class MBeanOperationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
      static readonly serialVersionUID: long
      static readonly NO_OPERATIONS: javax.management.MBeanOperationInfo[]
      public static readonly INFO: int
      public static readonly ACTION: int
      public static readonly ACTION_INFO: int
      public static readonly UNKNOWN: int
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method)
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
      public clone(): java.lang.Object
      public getReturnType(): java.lang.String
      public getSignature(): javax.management.MBeanParameterInfo[]
      public getImpact(): number
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      static parameters(
        arg0: java.lang.Class<unknown>[],
        arg1: java.lang.annotation.Annotation[][]
      ): javax.management.MBeanParameterInfo[]
    }
  }
}
