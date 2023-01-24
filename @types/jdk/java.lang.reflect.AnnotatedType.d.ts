declare namespace java {
  namespace lang {
    namespace reflect {
      interface AnnotatedType extends java.lang.reflect.AnnotatedElement {
        getAnnotatedOwnerType(): java.lang.reflect.AnnotatedType
        getType(): java.lang.reflect.Type
      }
    }
  }
}
