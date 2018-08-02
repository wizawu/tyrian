declare namespace java {
    namespace util {
        namespace concurrent {
class ConcurrentSkipListMap$SubMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.concurrent.ConcurrentNavigableMap<K, V> , java.lang.Cloneable , java.io.Serializable {
    public containsKey(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): V
    public put(arg0: K, arg1: V): V
    public remove(arg0: java.lang.Object): V
    public size(): int
    public isEmpty(): boolean
    public containsValue(arg0: java.lang.Object): boolean
    public clear(): void
    public putIfAbsent(arg0: K, arg1: V): V
    public remove(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public replace(arg0: K, arg1: V, arg2: V): boolean
    public replace(arg0: K, arg1: V): V
    public comparator(): java.util.Comparator<K>
    public subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public headMap(arg0: K, arg1: boolean): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public tailMap(arg0: K, arg1: boolean): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public subMap(arg0: K, arg1: K): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public headMap(arg0: K): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public tailMap(arg0: K): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public descendingMap(): java.util.concurrent.ConcurrentSkipListMap$SubMap<K, V>
    public ceilingEntry(arg0: K): java.util.Map$Entry<K, V>
    public ceilingKey(arg0: K): K
    public lowerEntry(arg0: K): java.util.Map$Entry<K, V>
    public lowerKey(arg0: K): K
    public floorEntry(arg0: K): java.util.Map$Entry<K, V>
    public floorKey(arg0: K): K
    public higherEntry(arg0: K): java.util.Map$Entry<K, V>
    public higherKey(arg0: K): K
    public firstKey(): K
    public lastKey(): K
    public firstEntry(): java.util.Map$Entry<K, V>
    public lastEntry(): java.util.Map$Entry<K, V>
    public pollFirstEntry(): java.util.Map$Entry<K, V>
    public pollLastEntry(): java.util.Map$Entry<K, V>
    public keySet(): java.util.NavigableSet<K>
    public navigableKeySet(): java.util.NavigableSet<K>
    public values(): java.util.Collection<V>
    public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
    public descendingKeySet(): java.util.NavigableSet<K>
    public keySet(): java.util.Set
    public descendingMap(): java.util.concurrent.ConcurrentNavigableMap
    public tailMap(arg0: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap
    public headMap(arg0: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap
    public subMap(arg0: java.lang.Object, arg1: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap
    public tailMap(arg0: java.lang.Object, arg1: boolean): java.util.concurrent.ConcurrentNavigableMap
    public headMap(arg0: java.lang.Object, arg1: boolean): java.util.concurrent.ConcurrentNavigableMap
    public subMap(arg0: java.lang.Object, arg1: boolean, arg2: java.lang.Object, arg3: boolean): java.util.concurrent.ConcurrentNavigableMap
    public tailMap(arg0: java.lang.Object): java.util.SortedMap
    public headMap(arg0: java.lang.Object): java.util.SortedMap
    public subMap(arg0: java.lang.Object, arg1: java.lang.Object): java.util.SortedMap
    public tailMap(arg0: java.lang.Object, arg1: boolean): java.util.NavigableMap
    public headMap(arg0: java.lang.Object, arg1: boolean): java.util.NavigableMap
    public subMap(arg0: java.lang.Object, arg1: boolean, arg2: java.lang.Object, arg3: boolean): java.util.NavigableMap
    public descendingMap(): java.util.NavigableMap
    public static class: java.lang.Class<any>
}

        }
    }
}