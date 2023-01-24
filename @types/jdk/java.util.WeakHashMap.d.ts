declare namespace java {
  namespace util {
    class WeakHashMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.Map<K, V> {
      table: java.util.WeakHashMap$Entry<K, V>[]
      modCount: int
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
      public constructor(arg0: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: java.util.Map<K, V>)
      static unmaskNull(arg0: java.lang.Object | any): java.lang.Object
      hash(arg0: java.lang.Object | any): number
      public size(): number
      public isEmpty(): boolean
      public get(arg0: java.lang.Object | any): V
      public containsKey(arg0: java.lang.Object | any): boolean
      getEntry(arg0: java.lang.Object | any): java.util.WeakHashMap$Entry<K, V>
      public put(arg0: K, arg1: V): V
      resize(arg0: number | java.lang.Integer): void
      public putAll(arg0: java.util.Map<K, V>): void
      public remove(arg0: java.lang.Object | any): V
      removeMapping(arg0: java.lang.Object | any): boolean
      public clear(): void
      public containsValue(arg0: java.lang.Object | any): boolean
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
      public forEach(arg0: java.util.function$.BiConsumer<unknown, unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown, unknown, V>): void
    }
  }
}
