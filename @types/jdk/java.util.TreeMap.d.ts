declare namespace java {
  namespace util {

    class TreeMap<K,V> extends java.util.AbstractMap<K,V> implements java.util.NavigableMap<K,V>, java.lang.Cloneable, java.io.Serializable {
      public constructor()
      public constructor(arg0: java.util.Comparator<unknown>)
      public constructor(arg0: java.util.Map<K,V>)
      public constructor(arg0: java.util.SortedMap<K,V>)
      public size(): number
      public containsKey(arg0: java.lang.Object | any): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): V
      public comparator(): java.util.Comparator<unknown>
      public firstKey(): K
      public lastKey(): K
      public putAll(arg0: java.util.Map<K,V>): void
      getEntry(arg0: java.lang.Object | any): java.util.TreeMap$Entry<K,V>
      getEntryUsingComparator(arg0: java.lang.Object | any): java.util.TreeMap$Entry<K,V>
      getCeilingEntry(arg0: K): java.util.TreeMap$Entry<K,V>
      getFloorEntry(arg0: K): java.util.TreeMap$Entry<K,V>
      getHigherEntry(arg0: K): java.util.TreeMap$Entry<K,V>
      getLowerEntry(arg0: K): java.util.TreeMap$Entry<K,V>
      public put(arg0: K, arg1: V): V
      public remove(arg0: java.lang.Object | any): V
      public clear(): void
      public clone(): java.lang.Object
      public firstEntry(): java.util.Map$Entry<K,V>
      public lastEntry(): java.util.Map$Entry<K,V>
      public pollFirstEntry(): java.util.Map$Entry<K,V>
      public pollLastEntry(): java.util.Map$Entry<K,V>
      public lowerEntry(arg0: K): java.util.Map$Entry<K,V>
      public lowerKey(arg0: K): K
      public floorEntry(arg0: K): java.util.Map$Entry<K,V>
      public floorKey(arg0: K): K
      public ceilingEntry(arg0: K): java.util.Map$Entry<K,V>
      public ceilingKey(arg0: K): K
      public higherEntry(arg0: K): java.util.Map$Entry<K,V>
      public higherKey(arg0: K): K
      public keySet(): java.util.Set<K>
      public navigableKeySet(): java.util.NavigableSet<K>
      public descendingKeySet(): java.util.NavigableSet<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
      public descendingMap(): java.util.NavigableMap<K,V>
      public subMap(arg0: K, arg1: boolean | java.lang.Boolean, arg2: K, arg3: boolean | java.lang.Boolean): java.util.NavigableMap<K,V>
      public headMap(arg0: K, arg1: boolean | java.lang.Boolean): java.util.NavigableMap<K,V>
      public tailMap(arg0: K, arg1: boolean | java.lang.Boolean): java.util.NavigableMap<K,V>
      public subMap(arg0: K, arg1: K): java.util.SortedMap<K,V>
      public headMap(arg0: K): java.util.SortedMap<K,V>
      public tailMap(arg0: K): java.util.SortedMap<K,V>
      public replace(arg0: K, arg1: V, arg2: V): boolean
      public replace(arg0: K, arg1: V): V
      public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
      keyIterator(): java.util.Iterator<K>
      descendingKeyIterator(): java.util.Iterator<K>
      compare(arg0: java.lang.Object | any, arg1: java.lang.Object | any): number
      static valEquals(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      static exportEntry<K,V>(arg0: java.util.TreeMap$Entry<K,V>): java.util.Map$Entry<K,V>
      static keyOrNull<K,V>(arg0: java.util.TreeMap$Entry<K,V>): K
      static key<K>(arg0: java.util.TreeMap$Entry<K,unknown>): K
      getFirstEntry(): java.util.TreeMap$Entry<K,V>
      getLastEntry(): java.util.TreeMap$Entry<K,V>
      static successor<K,V>(arg0: java.util.TreeMap$Entry<K,V>): java.util.TreeMap$Entry<K,V>
      static predecessor<K,V>(arg0: java.util.TreeMap$Entry<K,V>): java.util.TreeMap$Entry<K,V>
      readTreeSet(arg0: number | java.lang.Integer, arg1: java.io.ObjectInputStream, arg2: V): void
      addAllForTreeSet(arg0: java.util.SortedSet<K>, arg1: V): void
      static keySpliteratorFor<K>(arg0: java.util.NavigableMap<K,unknown>): java.util.Spliterator<K>
      keySpliterator(): java.util.Spliterator<K>
      descendingKeySpliterator(): java.util.Spliterator<K>
    }

  }
}
