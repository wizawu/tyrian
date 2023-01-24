declare namespace java {
  namespace util {
    namespace stream {
      interface BaseStream<T, S extends java.util.stream.BaseStream<T, S>> extends java.lang.AutoCloseable {
        iterator(): java.util.Iterator<T>
        spliterator(): java.util.Spliterator<T>
        isParallel(): boolean
        sequential(): S
        parallel(): S
        unordered(): S
        onClose(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): S
        close(): void
      }
    }
  }
}
