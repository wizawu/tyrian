declare namespace java {
  namespace util {

    abstract class Dictionary<K,V> {
      public constructor()
      public abstract size(): number
      public abstract isEmpty(): boolean
      public abstract keys(): java.util.Enumeration<K>
      public abstract elements(): java.util.Enumeration<V>
      public abstract get(arg0: java.lang.Object | any): V
      public abstract put(arg0: K, arg1: V): V
      public abstract remove(arg0: java.lang.Object | any): V
    }

  }
}
