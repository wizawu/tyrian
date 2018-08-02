declare namespace java {
    namespace util {
interface SortedMap<K, V> extends java.util.Map<K, V> {
    comparator(): java.util.Comparator<K>
    subMap(arg0: K, arg1: K): java.util.SortedMap<K, V>
    headMap(arg0: K): java.util.SortedMap<K, V>
    tailMap(arg0: K): java.util.SortedMap<K, V>
    firstKey(): K
    lastKey(): K
    keySet(): java.util.Set<K>
    values(): java.util.Collection<V>
    entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
}

    }
}