declare namespace java {
  namespace util {
    namespace concurrent {
      interface ConcurrentMap<K, V> extends java.util.Map<K, V> {
        getOrDefault?(arg0: java.lang.Object | any, arg1: V): V
        forEach?(arg0: java.util.function$.BiConsumer<unknown, unknown>): void
        putIfAbsent(arg0: K, arg1: V): V
        remove(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
        replace(arg0: K, arg1: V, arg2: V): boolean
        replace(arg0: K, arg1: V): V
        replaceAll?(arg0: java.util.function$.BiFunction<unknown, unknown, V>): void
        computeIfAbsent?(arg0: K, arg1: java.util.function$.Function<unknown, V>): V
        computeIfPresent?(arg0: K, arg1: java.util.function$.BiFunction<unknown, unknown, V>): V
        compute?(arg0: K, arg1: java.util.function$.BiFunction<unknown, unknown, V>): V
        merge?(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<unknown, unknown, V>): V
      }
    }
  }
}
