declare namespace java {
  namespace util {

    class Collections {
      public static readonly EMPTY_SET: java.util.Set
      public static readonly EMPTY_LIST: java.util.List
      public static readonly EMPTY_MAP: java.util.Map
      public static sort<T extends java.lang.Comparable<unknown>>(arg0: java.util.List<T>): void
      public static sort<T>(arg0: java.util.List<T>, arg1: java.util.Comparator<unknown>): void
      public static binarySearch<T>(arg0: java.util.List<java.lang.Comparable<unknown>>, arg1: T): number
      public static binarySearch<T>(arg0: java.util.List<T>, arg1: T, arg2: java.util.Comparator<unknown>): number
      public static reverse(arg0: java.util.List<unknown>): void
      public static shuffle(arg0: java.util.List<unknown>): void
      public static shuffle(arg0: java.util.List<unknown>, arg1: java.util.Random): void
      public static swap(arg0: java.util.List<unknown>, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public static fill<T>(arg0: java.util.List<unknown>, arg1: T): void
      public static copy<T>(arg0: java.util.List<unknown>, arg1: java.util.List<T>): void
      public static min<T extends java.lang.Comparable<unknown>>(arg0: java.util.Collection<T>): T
      public static min<T>(arg0: java.util.Collection<T>, arg1: java.util.Comparator<unknown>): T
      public static max<T extends java.lang.Comparable<unknown>>(arg0: java.util.Collection<T>): T
      public static max<T>(arg0: java.util.Collection<T>, arg1: java.util.Comparator<unknown>): T
      public static rotate(arg0: java.util.List<unknown>, arg1: number | java.lang.Integer): void
      public static replaceAll<T>(arg0: java.util.List<T>, arg1: T, arg2: T): boolean
      public static indexOfSubList(arg0: java.util.List<unknown>, arg1: java.util.List<unknown>): number
      public static lastIndexOfSubList(arg0: java.util.List<unknown>, arg1: java.util.List<unknown>): number
      public static unmodifiableCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>
      public static unmodifiableSet<T>(arg0: java.util.Set<T>): java.util.Set<T>
      public static unmodifiableSortedSet<T>(arg0: java.util.SortedSet<T>): java.util.SortedSet<T>
      public static unmodifiableNavigableSet<T>(arg0: java.util.NavigableSet<T>): java.util.NavigableSet<T>
      public static unmodifiableList<T>(arg0: java.util.List<T>): java.util.List<T>
      public static unmodifiableMap<K,V>(arg0: java.util.Map<K,V>): java.util.Map<K,V>
      public static unmodifiableSortedMap<K,V>(arg0: java.util.SortedMap<K,V>): java.util.SortedMap<K,V>
      public static unmodifiableNavigableMap<K,V>(arg0: java.util.NavigableMap<K,V>): java.util.NavigableMap<K,V>
      public static synchronizedCollection<T>(arg0: java.util.Collection<T>): java.util.Collection<T>
      static synchronizedCollection<T>(arg0: java.util.Collection<T>, arg1: java.lang.Object | any): java.util.Collection<T>
      public static synchronizedSet<T>(arg0: java.util.Set<T>): java.util.Set<T>
      static synchronizedSet<T>(arg0: java.util.Set<T>, arg1: java.lang.Object | any): java.util.Set<T>
      public static synchronizedSortedSet<T>(arg0: java.util.SortedSet<T>): java.util.SortedSet<T>
      public static synchronizedNavigableSet<T>(arg0: java.util.NavigableSet<T>): java.util.NavigableSet<T>
      public static synchronizedList<T>(arg0: java.util.List<T>): java.util.List<T>
      static synchronizedList<T>(arg0: java.util.List<T>, arg1: java.lang.Object | any): java.util.List<T>
      public static synchronizedMap<K,V>(arg0: java.util.Map<K,V>): java.util.Map<K,V>
      public static synchronizedSortedMap<K,V>(arg0: java.util.SortedMap<K,V>): java.util.SortedMap<K,V>
      public static synchronizedNavigableMap<K,V>(arg0: java.util.NavigableMap<K,V>): java.util.NavigableMap<K,V>
      public static checkedCollection<E>(arg0: java.util.Collection<E>, arg1: java.lang.Class<E>): java.util.Collection<E>
      static zeroLengthArray<T>(arg0: java.lang.Class<T>): T[]
      public static checkedQueue<E>(arg0: java.util.Queue<E>, arg1: java.lang.Class<E>): java.util.Queue<E>
      public static checkedSet<E>(arg0: java.util.Set<E>, arg1: java.lang.Class<E>): java.util.Set<E>
      public static checkedSortedSet<E>(arg0: java.util.SortedSet<E>, arg1: java.lang.Class<E>): java.util.SortedSet<E>
      public static checkedNavigableSet<E>(arg0: java.util.NavigableSet<E>, arg1: java.lang.Class<E>): java.util.NavigableSet<E>
      public static checkedList<E>(arg0: java.util.List<E>, arg1: java.lang.Class<E>): java.util.List<E>
      public static checkedMap<K,V>(arg0: java.util.Map<K,V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.Map<K,V>
      public static checkedSortedMap<K,V>(arg0: java.util.SortedMap<K,V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.SortedMap<K,V>
      public static checkedNavigableMap<K,V>(arg0: java.util.NavigableMap<K,V>, arg1: java.lang.Class<K>, arg2: java.lang.Class<V>): java.util.NavigableMap<K,V>
      public static emptyIterator<T>(): java.util.Iterator<T>
      public static emptyListIterator<T>(): java.util.ListIterator<T>
      public static emptyEnumeration<T>(): java.util.Enumeration<T>
      public static emptySet<T>(): java.util.Set<T>
      public static emptySortedSet<E>(): java.util.SortedSet<E>
      public static emptyNavigableSet<E>(): java.util.NavigableSet<E>
      public static emptyList<T>(): java.util.List<T>
      public static emptyMap<K,V>(): java.util.Map<K,V>
      public static emptySortedMap<K,V>(): java.util.SortedMap<K,V>
      public static emptyNavigableMap<K,V>(): java.util.NavigableMap<K,V>
      public static singleton<T>(arg0: T): java.util.Set<T>
      static singletonIterator<E>(arg0: E): java.util.Iterator<E>
      static singletonSpliterator<T>(arg0: T): java.util.Spliterator<T>
      public static singletonList<T>(arg0: T): java.util.List<T>
      public static singletonMap<K,V>(arg0: K, arg1: V): java.util.Map<K,V>
      public static nCopies<T>(arg0: number | java.lang.Integer, arg1: T): java.util.List<T>
      public static reverseOrder<T>(): java.util.Comparator<T>
      public static reverseOrder<T>(arg0: java.util.Comparator<T>): java.util.Comparator<T>
      public static enumeration<T>(arg0: java.util.Collection<T>): java.util.Enumeration<T>
      public static list<T>(arg0: java.util.Enumeration<T>): java.util.ArrayList<T>
      static eq(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public static frequency(arg0: java.util.Collection<unknown>, arg1: java.lang.Object | any): number
      public static disjoint(arg0: java.util.Collection<unknown>, arg1: java.util.Collection<unknown>): boolean
      public static addAll<T>(arg0: java.util.Collection<unknown>, ...vargs: (T)[]): boolean
      public static newSetFromMap<E>(arg0: java.util.Map<E,java.lang.Boolean>): java.util.Set<E>
      public static asLifoQueue<T>(arg0: java.util.Deque<T>): java.util.Queue<T>
    }

  }
}
