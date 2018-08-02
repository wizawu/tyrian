declare namespace java {
    namespace util {
        class Collections$CheckedNavigableMap<K, V> extends java.util.Collections$CheckedSortedMap<K, V> implements java.util.NavigableMap<K, V> , java.io.Serializable {
            public comparator(): java.util.Comparator<K>
            public firstKey(): K
            public lastKey(): K
            public lowerEntry(arg0: K): java.util.Map$Entry<K, V>
            public lowerKey(arg0: K): K
            public floorEntry(arg0: K): java.util.Map$Entry<K, V>
            public floorKey(arg0: K): K
            public ceilingEntry(arg0: K): java.util.Map$Entry<K, V>
            public ceilingKey(arg0: K): K
            public higherEntry(arg0: K): java.util.Map$Entry<K, V>
            public higherKey(arg0: K): K
            public firstEntry(): java.util.Map$Entry<K, V>
            public lastEntry(): java.util.Map$Entry<K, V>
            public pollFirstEntry(): java.util.Map$Entry<K, V>
            public pollLastEntry(): java.util.Map$Entry<K, V>
            public descendingMap(): java.util.NavigableMap<K, V>
            public keySet(): java.util.NavigableSet<K>
            public navigableKeySet(): java.util.NavigableSet<K>
            public descendingKeySet(): java.util.NavigableSet<K>
            public subMap(arg0: K, arg1: K): java.util.NavigableMap<K, V>
            public headMap(arg0: K): java.util.NavigableMap<K, V>
            public tailMap(arg0: K): java.util.NavigableMap<K, V>
            public subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.NavigableMap<K, V>
            public headMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public tailMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public tailMap(arg0: java.lang.Object): java.util.SortedMap
            public headMap(arg0: java.lang.Object): java.util.SortedMap
            public subMap(arg0: java.lang.Object, arg1: java.lang.Object): java.util.SortedMap
            public keySet(): java.util.Set
            public static class: java.lang.Class<any>
        }
    }
}