declare namespace java {
  namespace util {
    class Hashtable<K, V>
      extends java.util.Dictionary<K, V>
      implements java.util.Map<K, V>, java.lang.Cloneable, java.io.Serializable
    {
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
      public constructor(arg0: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: java.util.Map<K, V>)
      constructor(arg0: java.lang.Void)
      public size(): number
      public isEmpty(): boolean
      public keys(): java.util.Enumeration<K>
      public elements(): java.util.Enumeration<V>
      public contains(arg0: java.lang.Object | any): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public containsKey(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): V
      protected rehash(): void
      public put(arg0: K, arg1: V): V
      public remove(arg0: java.lang.Object | any): V
      public putAll(arg0: java.util.Map<K, V>): void
      public clear(): void
      public clone(): java.lang.Object
      cloneHashtable(): java.util.Hashtable<unknown, unknown>
      public toString(): java.lang.String
      public keySet(): java.util.Set<K>
      public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
      public values(): java.util.Collection<V>
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public getOrDefault(arg0: java.lang.Object | any, arg1: V): V
      public forEach(arg0: java.util.function$.BiConsumer<unknown, unknown>): void
      public replaceAll(arg0: java.util.function$.BiFunction<unknown, unknown, V>): void
      public putIfAbsent(arg0: K, arg1: V): V
      public remove(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public replace(arg0: K, arg1: V, arg2: V): boolean
      public replace(arg0: K, arg1: V): V
      public computeIfAbsent(arg0: K, arg1: java.util.function$.Function<unknown, V>): V
      public computeIfPresent(arg0: K, arg1: java.util.function$.BiFunction<unknown, unknown, V>): V
      public compute(arg0: K, arg1: java.util.function$.BiFunction<unknown, unknown, V>): V
      public merge(arg0: K, arg1: V, arg2: java.util.function$.BiFunction<unknown, unknown, V>): V
      writeHashtable(arg0: java.io.ObjectOutputStream): void
      defaultWriteHashtable(
        arg0: java.io.ObjectOutputStream,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Float
      ): void
      readHashtable(arg0: java.io.ObjectInputStream): void
    }
  }
}
