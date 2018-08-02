declare namespace java {
    namespace util {
        class Collections$UnmodifiableSortedMap<K, V> extends java.util.Collections$UnmodifiableMap<K, V> implements java.util.SortedMap<K, V> , java.io.Serializable {
            public comparator(): java.util.Comparator<K>
            public subMap(arg0: K, arg1: K): java.util.SortedMap<K, V>
            public headMap(arg0: K): java.util.SortedMap<K, V>
            public tailMap(arg0: K): java.util.SortedMap<K, V>
            public firstKey(): K
            public lastKey(): K
            public static class: java.lang.Class<any>
        }
    }
}