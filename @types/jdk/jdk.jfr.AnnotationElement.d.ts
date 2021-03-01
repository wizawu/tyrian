declare namespace jdk {
  namespace jfr {

    class AnnotationElement {

      constructor(arg0: jdk.jfr.internal.Type, arg1: java.util.List<java.lang.Object>, arg2: boolean)
      public constructor(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.util.Map<java.lang.String,java.lang.Object>)
      public constructor(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.lang.Object)
      public constructor(arg0: java.lang.Class<java.lang.annotation.Annotation>)
      public getValues(): java.util.List<java.lang.Object>
      public getValueDescriptors(): java.util.List<jdk.jfr.ValueDescriptor>
      public getAnnotationElements(): java.util.List<jdk.jfr.AnnotationElement>
      public getTypeName(): java.lang.String
      public getValue(arg0: java.lang.String): java.lang.Object
      public hasValue(arg0: java.lang.String): boolean
      public readonly getAnnotation<A>(arg0: java.lang.Class<java.lang.annotation.Annotation>): A
      public getTypeId(): long
      getType(): jdk.jfr.internal.Type
      isInBoot(): boolean
    }

  }
}
