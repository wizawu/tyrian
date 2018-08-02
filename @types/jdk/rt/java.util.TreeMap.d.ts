declare namespace java {
    namespace util {
        class TreeMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.NavigableMap<K, V> , java.lang.Cloneable , java.io.Serializable {
            public constructor()
            public constructor(arg0: java.util.Comparator<K>)
            public constructor(arg0: java.util.Map<K, V>)
            public constructor(arg0: java.util.SortedMap<K, V>)
            public size(): int
            public containsKey(arg0: java.lang.Object): boolean
            public containsValue(arg0: java.lang.Object): boolean
            public get(arg0: java.lang.Object): V
            public comparator(): java.util.Comparator<K>
            public firstKey(): K
            public lastKey(): K
            public putAll(arg0: java.util.Map<K, V>): void
            public put(arg0: K, arg1: V): V
            public remove(arg0: java.lang.Object): V
            public clear(): void
            public clone(): java.lang.Object
            public firstEntry(): java.util.Map$Entry<K, V>
            public lastEntry(): java.util.Map$Entry<K, V>
            public pollFirstEntry(): java.util.Map$Entry<K, V>
            public pollLastEntry(): java.util.Map$Entry<K, V>
            public lowerEntry(arg0: K): java.util.Map$Entry<K, V>
            public lowerKey(arg0: K): K
            public floorEntry(arg0: K): java.util.Map$Entry<K, V>
            public floorKey(arg0: K): K
            public ceilingEntry(arg0: K): java.util.Map$Entry<K, V>
            public ceilingKey(arg0: K): K
            public higherEntry(arg0: K): java.util.Map$Entry<K, V>
            public higherKey(arg0: K): K
            public keySet(): java.util.Set<K>
            public navigableKeySet(): java.util.NavigableSet<K>
            public descendingKeySet(): java.util.NavigableSet<K>
            public values(): java.util.Collection<V>
            public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
            public descendingMap(): java.util.NavigableMap<K, V>
            public subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.NavigableMap<K, V>
            public headMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public tailMap(arg0: K, arg1: boolean): java.util.NavigableMap<K, V>
            public subMap(arg0: K, arg1: K): java.util.SortedMap<K, V>
            public headMap(arg0: K): java.util.SortedMap<K, V>
            public tailMap(arg0: K): java.util.SortedMap<K, V>
            public replace(arg0: K, arg1: V, arg2: V): boolean
            public replace(arg0: K, arg1: V): V
            public forEach(arg0: java.util.function$.BiConsumer<K, V>): void
            public replaceAll(arg0: java.util.function$.BiFunction<K, V, V>): void
            public static class: java.lang.Class<any>
        }
    }
}