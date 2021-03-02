declare namespace java {
  namespace util {

    abstract class AbstractCollection<E> implements java.util.Collection<E> {
      protected constructor()
      public abstract iterator(): java.util.Iterator<E>
      public abstract size(): int
      public isEmpty(): boolean
      public contains(arg0: java.lang.Object): boolean
      public toArray(): java.lang.Object[]
      public toArray<T>(arg0: T[]): T[]
      public add(arg0: E): boolean
      public remove(arg0: java.lang.Object): boolean
      public containsAll(arg0: java.util.Collection<unknown>): boolean
      public addAll(arg0: java.util.Collection<E>): boolean
      public removeAll(arg0: java.util.Collection<unknown>): boolean
      public retainAll(arg0: java.util.Collection<unknown>): boolean
      public clear(): void
      public toString(): java.lang.String
    }

  }
}
