declare namespace java {
  namespace util {

    interface List<E> extends java.util.Collection<E> {
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
      addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): boolean
      removeAll(arg0: java.util.Collection<unknown>): boolean
      retainAll(arg0: java.util.Collection<unknown>): boolean
      replaceAll(arg0: java.util.function$.UnaryOperator<E>): void
      sort(arg0: java.util.Comparator<unknown>): void
      clear(): void
      equals(arg0: java.lang.Object | any): boolean
      hashCode(): number
      get(arg0: number | java.lang.Integer): E
      set(arg0: number | java.lang.Integer, arg1: E): E
      add(arg0: number | java.lang.Integer, arg1: E): void
      remove(arg0: number | java.lang.Integer): E
      indexOf(arg0: java.lang.Object | any): number
      lastIndexOf(arg0: java.lang.Object | any): number
      listIterator(): java.util.ListIterator<E>
      listIterator(arg0: number | java.lang.Integer): java.util.ListIterator<E>
      subList(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.List<E>
      spliterator(): java.util.Spliterator<E>
      of<E>(): java.util.List<E>
      of<E>(arg0: E): java.util.List<E>
      of<E>(arg0: E, arg1: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): java.util.List<E>
      of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): java.util.List<E>
      of<E>(...vargs: (E)[]): java.util.List<E>
      copyOf<E>(arg0: java.util.Collection<E>): java.util.List<E>
    }

  }
}
