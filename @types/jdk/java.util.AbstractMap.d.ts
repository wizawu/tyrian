declare namespace java {
  namespace util {
    abstract class AbstractMap<K, V> implements java.util.Map<K, V> {
      keySet: java.util.Set<K>
      values: java.util.Collection<V>
      protected constructor()
      public size(): number
      public isEmpty(): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public containsKey(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): V
      public put(arg0: K, arg1: V): V
      public remove(arg0: java.lang.Object | any): V
      public putAll(arg0: java.util.Map<K, V>): void
      public clear(): void
      public keySet(): java.util.Set<K>
      public values(): java.util.Collection<V>
      public abstract entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      protected clone(): java.lang.Object
    }
  }
}
