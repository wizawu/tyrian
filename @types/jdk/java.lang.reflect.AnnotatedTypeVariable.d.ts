declare namespace java {
  namespace lang {
    namespace reflect {
      interface AnnotatedTypeVariable extends java.lang.reflect.AnnotatedType {
        getAnnotatedBounds(): java.lang.reflect.AnnotatedType[]
        getAnnotatedOwnerType(): java.lang.reflect.AnnotatedType
      }
    }
  }
}
