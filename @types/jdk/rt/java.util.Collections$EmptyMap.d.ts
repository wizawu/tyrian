declare namespace java {
    namespace util {
class Collections$EmptyMap<K, V> extends java.util.AbstractMap<K, V> implements java.io.Serializable {
    public size(): int
    public isEmpty(): boolean
    public containsKey(arg0: java.lang.Object): boolean
    public containsValue(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): V
    public keySet(): java.util.Set<K>
    public values(): java.util.Collection<V>
    public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getOrDefault(arg0: java.lang.Object, arg1: V): V
    public forEach(arg0: java.util.function$.BiConsumer<K, V>): void
    public replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
    public putIfAbsent(arg0: K, arg1: V): V
    public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public replace(arg0: K, arg1: V, arg2: V): boolean
    public replace(arg0: K, arg1: V): V
    public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<K, V>): V
    public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
    public compute(arg0: K, arg1: java.util.function$.BiFunction<K, V, V>): V
    public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<V, V, V>): V
    public static class: java.lang.Class<any>
}

    }
}