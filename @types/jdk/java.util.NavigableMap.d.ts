declare namespace java {
  namespace util {

    interface NavigableMap<K,V> extends java.util.SortedMap<K,V> {

      lowerEntry(arg0: K): java.util.Map$Entry<K,V>
      lowerKey(arg0: K): K
      floorEntry(arg0: K): java.util.Map$Entry<K,V>
      floorKey(arg0: K): K
      ceilingEntry(arg0: K): java.util.Map$Entry<K,V>
      ceilingKey(arg0: K): K
      higherEntry(arg0: K): java.util.Map$Entry<K,V>
      higherKey(arg0: K): K
      firstEntry(): java.util.Map$Entry<K,V>
      lastEntry(): java.util.Map$Entry<K,V>
      pollFirstEntry(): java.util.Map$Entry<K,V>
      pollLastEntry(): java.util.Map$Entry<K,V>
      descendingMap(): java.util.NavigableMap<K,V>
      navigableKeySet(): java.util.NavigableSet<K>
      descendingKeySet(): java.util.NavigableSet<K>
      subMap(arg0: K, arg1: boolean, arg2: K, arg3: boolean): java.util.NavigableMap<K,V>
      headMap(arg0: K, arg1: boolean): java.util.NavigableMap<K,V>
      tailMap(arg0: K, arg1: boolean): java.util.NavigableMap<K,V>
      subMap(arg0: K, arg1: K): java.util.SortedMap<K,V>
      headMap(arg0: K): java.util.SortedMap<K,V>
      tailMap(arg0: K): java.util.SortedMap<K,V>
    }

  }
}
