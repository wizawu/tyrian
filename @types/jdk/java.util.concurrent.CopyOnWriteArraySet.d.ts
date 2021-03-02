declare namespace java {
  namespace util {
    namespace concurrent {

      class CopyOnWriteArraySet<E> extends java.util.AbstractSet<E> implements java.io.Serializable {
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public size(): number
        public isEmpty(): boolean
        public contains(arg0: java.lang.Object | any): boolean
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public clear(): void
        public remove(arg0: java.lang.Object | any): boolean
        public add(arg0: E): boolean
        public containsAll(arg0: java.util.Collection<unknown>): boolean
        public addAll(arg0: java.util.Collection<E>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        public iterator(): java.util.Iterator<E>
        public equals(arg0: java.lang.Object | any): boolean
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public forEach(arg0: java.util.function$.Consumer<unknown>): void
        public spliterator(): java.util.Spliterator<E>
      }

    }
  }
}
