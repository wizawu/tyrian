declare namespace java {
    namespace util {
        namespace concurrent {
interface ConcurrentNavigableMap<K, V> extends java.util.concurrent.ConcurrentMap<K, V> , java.util.NavigableMap<K, V> {
    subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
    headMap(arg0: K, arg1: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
    tailMap(arg0: K, arg1: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
    subMap(arg0: K, arg1: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
    headMap(arg0: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
    tailMap(arg0: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
    descendingMap(): java.util.concurrent.ConcurrentNavigableMap<K, V>
    navigableKeySet(): java.util.NavigableSet<K>
    keySet(): java.util.NavigableSet<K>
    descendingKeySet(): java.util.NavigableSet<K>
    keySet(): java.util.Set
    tailMap(arg0: java.lang.Object): java.util.SortedMap
    headMap(arg0: java.lang.Object): java.util.SortedMap
    subMap(arg0: java.lang.Object, arg1: java.lang.Object): java.util.SortedMap
    tailMap(arg0: java.lang.Object, arg1: boolean): java.util.NavigableMap
    headMap(arg0: java.lang.Object, arg1: boolean): java.util.NavigableMap
    subMap(arg0: java.lang.Object, arg1: boolean, arg2: java.lang.Object, arg3: boolean): java.util.NavigableMap
    descendingMap(): java.util.NavigableMap
}

        }
    }
}