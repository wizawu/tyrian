declare namespace java {
  namespace util {
    interface Set<E> extends java.util.Collection<E> {
      size(): number
      isEmpty(): boolean
      contains(arg0: java.lang.Object | any): boolean
      iterator(): java.util.Iterator<E>
      toArray(): java.lang.Object[]
      toArray<T>(arg0: T[]): T[]
      add(arg0: E): boolean
      remove(arg0: java.lang.Object | any): boolean
      containsAll(arg0: java.util.Collection<unknown>): boolean
      addAll(arg0: java.util.Collection<E>): boolean
      retainAll(arg0: java.util.Collection<unknown>): boolean
      removeAll(arg0: java.util.Collection<unknown>): boolean
      clear(): void
      equals(arg0: java.lang.Object | any): boolean
      hashCode(): number
      spliterator(): java.util.Spliterator<E>
      of<E>(): java.util.Set<E>
      of<E>(arg0: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java.util.Set<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java.util.Set<E>
      of<E>(...vargs: E[]): java.util.Set<E>
      copyOf<E>(arg0: java.util.Collection<E>): java.util.Set<E>
    }
  }
}
