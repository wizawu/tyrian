declare namespace java {
  namespace util {
    class IdentityHashMap<K, V>
      extends java.util.AbstractMap<K, V>
      implements java.util.Map<K, V>, java.io.Serializable, java.lang.Cloneable
    {
      table: java.lang.Object[]
      size: int
      modCount: int
      static readonly NULL_KEY: java.lang.Object
      static unmaskNull(arg0: java.lang.Object | any): java.lang.Object
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.util.Map<K, V>)
      public size(): number
      public isEmpty(): boolean
      public get(arg0: java.lang.Object | any): V
      public containsKey(arg0: java.lang.Object | any): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public put(arg0: K, arg1: V): V
      public putAll(arg0: java.util.Map<K, V>): void
      public remove(arg0: java.lang.Object | any): V
      public clear(): void
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public clone(): java.lang.Object
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
      public forEach(arg0: java.util.function$.BiConsumer<unknown, unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown, unknown, V>): void
    }
  }
}
