declare namespace java {
    namespace util {
        class TreeMap$AscendingSubMap<K, V> extends java.util.TreeMap$NavigableSubMap<K, V> {
            public comparator(): java.util.Comparator<K>
            public subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.NavigableMap<K, V>
            public headMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public tailMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public descendingMap(): java.util.NavigableMap<K, V>
            public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
            public static class: java.lang.Class<any>
        }
    }
}