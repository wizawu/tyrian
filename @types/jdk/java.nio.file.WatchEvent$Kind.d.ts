declare namespace java {
  namespace nio {
    namespace file {

      interface WatchEvent$Kind<T> {
        name(): java.lang.String
        type(): java.lang.Class<T>
      }

    }
  }
}
