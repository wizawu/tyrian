declare namespace java {
    namespace util {
class TreeMap$SubMap extends java.util.AbstractMap<K, V> implements java.util.SortedMap<K, V> , java.io.Serializable {
    public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
    public lastKey(): K
    public firstKey(): K
    public subMap(arg0: K, arg1: K): java.util.SortedMap<K, V>
    public headMap(arg0: K): java.util.SortedMap<K, V>
    public tailMap(arg0: K): java.util.SortedMap<K, V>
    public comparator(): java.util.Comparator<K>
    public static class: java.lang.Class<any>
}

    }
}