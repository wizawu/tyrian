declare namespace java {
  namespace util {

    abstract class Dictionary<K,V> {
      public constructor()
      public abstract size(): int
      public abstract isEmpty(): boolean
      public abstract keys(): java.util.Enumeration<K>
      public abstract elements(): java.util.Enumeration<V>
      public abstract get(arg0: java.lang.Object): V
      public abstract put(arg0: K, arg1: V): V
      public abstract remove(arg0: java.lang.Object): V
    }

  }
}
