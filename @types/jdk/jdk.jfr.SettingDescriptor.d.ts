declare namespace jdk {
  namespace jfr {

    class SettingDescriptor {
      constructor(arg0: jdk.jfr.internal.Type, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.List<jdk.jfr.AnnotationElement>)
      setAnnotations(arg0: java.util.List<jdk.jfr.AnnotationElement>): void
      public getName(): java.lang.String
      public getLabel(): java.lang.String
      public getDescription(): java.lang.String
      public getContentType(): java.lang.String
      public getTypeName(): java.lang.String
      public getTypeId(): number
      public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public getAnnotationElements(): java.util.List<jdk.jfr.AnnotationElement>
      public getDefaultValue(): java.lang.String
      getType(): jdk.jfr.internal.Type
    }

  }
}
