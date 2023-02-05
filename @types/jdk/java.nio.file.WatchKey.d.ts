declare namespace java {
  namespace nio {
    namespace file {
      interface WatchKey {
        isValid(): boolean
        pollEvents(): java.util.List<java.nio.file.WatchEvent<unknown>>
        reset(): boolean
        cancel(): void
        watchable(): java.nio.file.Watchable
      }
    }
  }
}
