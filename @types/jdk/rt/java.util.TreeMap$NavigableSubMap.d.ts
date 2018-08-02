declare namespace java {
    namespace util {
        abstract class TreeMap$NavigableSubMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.NavigableMap<K, V> , java.io.Serializable {
            public isEmpty(): boolean
            public size(): int
            public containsKey(arg0: java.lang.Object): boolean
            public put(arg0: K, arg1: V): V
            public get(arg0: java.lang.Object): V
            public remove(arg0: java.lang.Object): V
            public ceilingEntry(arg0: K): java.util.Map$Entry<K, V>
            public ceilingKey(arg0: K): K
            public higherEntry(arg0: K): java.util.Map$Entry<K, V>
            public higherKey(arg0: K): K
            public floorEntry(arg0: K): java.util.Map$Entry<K, V>
            public floorKey(arg0: K): K
            public lowerEntry(arg0: K): java.util.Map$Entry<K, V>
            public lowerKey(arg0: K): K
            public firstKey(): K
            public lastKey(): K
            public firstEntry(): java.util.Map$Entry<K, V>
            public lastEntry(): java.util.Map$Entry<K, V>
            public pollFirstEntry(): java.util.Map$Entry<K, V>
            public pollLastEntry(): java.util.Map$Entry<K, V>
            public navigableKeySet(): java.util.NavigableSet<K>
            public keySet(): java.util.Set<K>
            public descendingKeySet(): java.util.NavigableSet<K>
            public subMap(arg0: K, arg1: K): java.util.SortedMap<K, V>
            public headMap(arg0: K): java.util.SortedMap<K, V>
            public tailMap(arg0: K): java.util.SortedMap<K, V>
            public static class: java.lang.Class<any>
        }
    }
}