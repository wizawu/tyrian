declare namespace jdk {
  namespace jfr {

    class ValueDescriptor {
      constructor(arg0: jdk.jfr.internal.Type, arg1: java.lang.String, arg2: java.util.List<jdk.jfr.AnnotationElement>, arg3: int, arg4: boolean, arg5: java.lang.String)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: java.util.List<jdk.jfr.AnnotationElement>)
      constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: java.util.List<jdk.jfr.AnnotationElement>, arg3: boolean)
      public getLabel(): java.lang.String
      public getName(): java.lang.String
      public getDescription(): java.lang.String
      public getContentType(): java.lang.String
      public getTypeName(): java.lang.String
      public getTypeId(): long
      public isArray(): boolean
      public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public getAnnotationElements(): java.util.List<jdk.jfr.AnnotationElement>
      public getFields(): java.util.List<jdk.jfr.ValueDescriptor>
      getType(): jdk.jfr.internal.Type
      setAnnotations(arg0: java.util.List<jdk.jfr.AnnotationElement>): void
      isConstantPool(): boolean
      getJavaFieldName(): java.lang.String
      isUnsigned(): boolean
    }

  }
}
