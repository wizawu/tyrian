declare namespace java {
  namespace util {
    namespace concurrent {

      class ConcurrentHashMap$KeySetView<K,V> extends java.util.concurrent.ConcurrentHashMap$CollectionView<K,V,K> implements java.util.Set<K>, java.io.Serializable {
        constructor(arg0: java.util.concurrent.ConcurrentHashMap<K,V>, arg1: V)
        public getMappedValue(): V
        public contains(arg0: java.lang.Object | any): boolean
        public remove(arg0: java.lang.Object | any): boolean
        public iterator(): java.util.Iterator<K>
        public add(arg0: K): boolean
        public addAll(arg0: java.util.Collection<K>): boolean
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public spliterator(): java.util.Spliterator<K>
        public forEach(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
        public removeAll(arg0: java.util.Collection): boolean
        public getMap(): java.util.concurrent.ConcurrentHashMap
      }

    }
  }
}
