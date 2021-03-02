declare namespace jdk {
  namespace jfr {

    class ValueDescriptor {
      constructor(arg0: jdk.jfr.internal.Type, arg1: java.lang.String | string, arg2: java.util.List<jdk.jfr.AnnotationElement>, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean, arg5: java.lang.String | string)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.util.List<jdk.jfr.AnnotationElement>)
      constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.util.List<jdk.jfr.AnnotationElement>, arg3: boolean | java.lang.Boolean)
      public getLabel(): java.lang.String
      public getName(): java.lang.String
      public getDescription(): java.lang.String
      public getContentType(): java.lang.String
      public getTypeName(): java.lang.String
      public getTypeId(): number
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
