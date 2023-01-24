declare namespace java {
  namespace lang {
    namespace reflect {
      interface AnnotatedParameterizedType extends java.lang.reflect.AnnotatedType {
        getAnnotatedActualTypeArguments(): java.lang.reflect.AnnotatedType[]
        getAnnotatedOwnerType(): java.lang.reflect.AnnotatedType
      }
    }
  }
}
