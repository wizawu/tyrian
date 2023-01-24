declare namespace java {
  namespace util {
    interface Spliterator$OfPrimitive<
      T,
      T_CONS,
      T_SPLITR extends java.util.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>
    > extends java.util.Spliterator<T> {
      trySplit(): T_SPLITR
      tryAdvance(arg0: T_CONS): boolean
      forEachRemaining(arg0: T_CONS): void
      trySplit(): java.util.Spliterator
    }
  }
}
