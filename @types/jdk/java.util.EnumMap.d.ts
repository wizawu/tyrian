declare namespace java {
  namespace util {
    class EnumMap<K extends java.lang.Enum<K>, V>
      extends java.util.AbstractMap<K, V>
      implements java.io.Serializable, java.lang.Cloneable
    {
      public constructor(arg0: java.lang.Class<K>)
      public constructor(arg0: java.util.EnumMap<K, V>)
      public constructor(arg0: java.util.Map<K, V>)
      public size(): number
      public containsValue(arg0: java.lang.Object | any): boolean
      public containsKey(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): V
      public put(arg0: K, arg1: V): V
      public remove(arg0: java.lang.Object | any): V
      public putAll(arg0: java.util.Map<K, V>): void
      public clear(): void
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public clone(): java.util.EnumMap<K, V>
      public clone(): java.lang.Object
      public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
    }
  }
}
