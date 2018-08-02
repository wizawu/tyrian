declare namespace java {
    namespace util {
        interface Map<K, V> {
            size(): int
            isEmpty(): boolean
            containsKey(arg0: java.lang.Object): boolean
            containsValue(arg0: java.lang.Object): boolean
            get(arg0: java.lang.Object): V
            put(arg0: K, arg1: V): V
            remove(arg0: java.lang.Object): V
            putAll(arg0: java.util.Map<K, V>): void
            clear(): void
            keySet(): java.util.Set<K>
            values(): java.util.Collection<V>
            entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
            equals(arg0: java.lang.Object): boolean
            hashCode(): int
            getOrDefault(arg0: java.lang.Object, arg1: V): V
            forEach(arg0: java.util.function$.BiConsumer<K, V>): void
            replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
            putIfAbsent(arg0: K, arg1: V): V
            remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
            replace(arg0: K, arg1: V, arg2: V): boolean
            replace(arg0: K, arg1: V): V
            computeIfAbsent(arg0: K, arg1: java.util.function$.Function<K, V>): V
            computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
            compute(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
            merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<V, V, V>): V
        }
    }
}