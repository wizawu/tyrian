declare namespace java {
    namespace util {
class LinkedHashMap<K, V> extends java.util.HashMap<K, V> implements java.util.Map<K, V> {
    public constructor(arg0: int, arg1: float)
    public constructor(arg0: int)
    public constructor()
    public constructor(arg0: java.util.Map<K, V>)
    public constructor(arg0: int, arg1: float, arg2: boolean)
    public containsValue(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): V
    public getOrDefault(arg0: java.lang.Object, arg1: V): V
    public clear(): void
    protected removeEldestEntry(arg0: java.util.Map$Entry<K, V>): boolean
    public keySet(): java.util.Set<K>
    public values(): java.util.Collection<V>
    public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
    public forEach(arg0: java.util.function$.BiConsumer<K, V>): void
    public replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
    public static class: java.lang.Class<any>
}

    }
}