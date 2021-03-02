declare namespace java {
  namespace lang {
    namespace annotation {

      interface Target extends java.lang.annotation.Annotation {
        value(): java.lang.annotation.ElementType[]
      }

    }
  }
}
