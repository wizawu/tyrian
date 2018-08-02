declare namespace java {
    namespace util {
        class Collections$UnmodifiableNavigableMap<K, V> extends java.util.Collections$UnmodifiableSortedMap<K, V> implements java.util.NavigableMap<K, V> , java.io.Serializable {
            public lowerKey(arg0: K): K
            public floorKey(arg0: K): K
            public ceilingKey(arg0: K): K
            public higherKey(arg0: K): K
            public lowerEntry(arg0: K): java.util.Map$Entry<K, V>
            public floorEntry(arg0: K): java.util.Map$Entry<K, V>
            public ceilingEntry(arg0: K): java.util.Map$Entry<K, V>
            public higherEntry(arg0: K): java.util.Map$Entry<K, V>
            public firstEntry(): java.util.Map$Entry<K, V>
            public lastEntry(): java.util.Map$Entry<K, V>
            public pollFirstEntry(): java.util.Map$Entry<K, V>
            public pollLastEntry(): java.util.Map$Entry<K, V>
            public descendingMap(): java.util.NavigableMap<K, V>
            public navigableKeySet(): java.util.NavigableSet<K>
            public descendingKeySet(): java.util.NavigableSet<K>
            public subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.NavigableMap<K, V>
            public headMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public tailMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public static class: java.lang.Class<any>
        }
    }
}