declare namespace java {
  namespace nio {
    namespace file {
      interface WatchEvent<T> {
        kind(): java.nio.file.WatchEvent$Kind<T>
        count(): number
        context(): T
      }
    }
  }
}
