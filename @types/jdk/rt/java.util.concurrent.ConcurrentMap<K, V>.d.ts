declare namespace java {
    namespace util {
        namespace concurrent {
interface ConcurrentMap<K, V> extends java.util.Map<K, V> {
    getOrDefault(arg0: java.lang.Object, arg1: V): V
    forEach(arg0: java.util.function$.BiConsumer<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    replace(arg0: K, arg1: V, arg2: V): boolean
    replace(arg0: K, arg1: V): V
    replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
    computeIfAbsent(arg0: K, arg1: java.util.function$.Function<K, V>): V
    computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
    compute(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
    merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<V, V, V>): V
}

        }
    }
}