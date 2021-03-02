declare namespace java {
  namespace util {

    interface Map$Entry<K,V> {
      getKey(): K
      getValue(): V
      setValue(arg0: V): V
      equals(arg0: java.lang.Object | any): boolean
      hashCode(): number
      comparingByKey<K extends java.lang.Comparable<unknown>,V>(): java.util.Comparator<java.util.Map$Entry<K,V>>
      comparingByValue<K,V extends java.lang.Comparable<unknown>>(): java.util.Comparator<java.util.Map$Entry<K,V>>
      comparingByKey<K,V>(arg0: java.util.Comparator<unknown>): java.util.Comparator<java.util.Map$Entry<K,V>>
      comparingByValue<K,V>(arg0: java.util.Comparator<unknown>): java.util.Comparator<java.util.Map$Entry<K,V>>
    }

  }
}
