declare namespace java {
  namespace util {

    interface Collection<E> extends java.lang.Iterable<E> {
      size(): int
      isEmpty(): boolean
      contains(arg0: java.lang.Object): boolean
      iterator(): java.util.Iterator<E>
      toArray(): java.lang.Object[]
      toArray<T>(arg0: T[]): T[]
      toArray<T>(arg0: java.util.function$.IntFunction<T[]>): T[]
      add(arg0: E): boolean
      remove(arg0: java.lang.Object): boolean
      containsAll(arg0: java.util.Collection<unknown>): boolean
      addAll(arg0: java.util.Collection<E>): boolean
      removeAll(arg0: java.util.Collection<unknown>): boolean
      removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
      retainAll(arg0: java.util.Collection<unknown>): boolean
      clear(): void
      equals(arg0: java.lang.Object): boolean
      hashCode(): int
      spliterator(): java.util.Spliterator<E>
      stream(): java.util.stream.Stream<E>
      parallelStream(): java.util.stream.Stream<E>
    }

  }
}
