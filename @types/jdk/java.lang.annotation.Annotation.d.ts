declare namespace java {
  namespace lang {
    namespace annotation {

      interface Annotation {
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
        annotationType(): java.lang.Class<java.lang.annotation.Annotation>
      }

    }
  }
}
