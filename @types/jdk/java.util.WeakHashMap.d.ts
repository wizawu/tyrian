declare namespace java {
  namespace util {

    class WeakHashMap<K,V> extends java.util.AbstractMap<K,V> implements java.util.Map<K,V> {
      table: java.util.WeakHashMap$Entry<K,V>[]
      modCount: int
      public constructor(arg0: int, arg1: float)
      public constructor(arg0: int)
      public constructor()
      public constructor(arg0: java.util.Map<K,V>)
      static unmaskNull(arg0: java.lang.Object): java.lang.Object
      hash(arg0: java.lang.Object): int
      public size(): int
      public isEmpty(): boolean
      public get(arg0: java.lang.Object): V
      public containsKey(arg0: java.lang.Object): boolean
      getEntry(arg0: java.lang.Object): java.util.WeakHashMap$Entry<K,V>
      public put(arg0: K, arg1: V): V
      resize(arg0: int): void
      public putAll(arg0: java.util.Map<K,V>): void
      public remove(arg0: java.lang.Object): V
      removeMapping(arg0: java.lang.Object): boolean
      public clear(): void
      public containsValue(arg0: java.lang.Object): boolean
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K,V>>
      public forEach(arg0: java.util.function$.BiConsumer<unknown,unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown,unknown,V>): void
    }

  }
}
