declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        interface FileAttribute<T> {

          name(): java.lang.String
          value(): T
        }

      }
    }
  }
}
