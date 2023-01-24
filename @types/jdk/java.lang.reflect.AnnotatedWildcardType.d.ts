declare namespace java {
  namespace lang {
    namespace reflect {
      interface AnnotatedWildcardType extends java.lang.reflect.AnnotatedType {
        getAnnotatedLowerBounds(): java.lang.reflect.AnnotatedType[]
        getAnnotatedUpperBounds(): java.lang.reflect.AnnotatedType[]
        getAnnotatedOwnerType(): java.lang.reflect.AnnotatedType
      }
    }
  }
}
