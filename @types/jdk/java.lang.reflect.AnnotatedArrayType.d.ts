declare namespace java {
  namespace lang {
    namespace reflect {

      interface AnnotatedArrayType extends java.lang.reflect.AnnotatedType {
        getAnnotatedGenericComponentType(): java.lang.reflect.AnnotatedType
        getAnnotatedOwnerType(): java.lang.reflect.AnnotatedType
      }

    }
  }
}
