declare namespace java {
  namespace util {
    namespace concurrent {

      class ConcurrentLinkedQueue<E> extends java.util.AbstractQueue<E> implements java.util.Queue<E>, java.io.Serializable {
        head: java.util.concurrent.ConcurrentLinkedQueue$Node<E>
        static readonly ITEM: java.lang.invoke.VarHandle
        static readonly NEXT: java.lang.invoke.VarHandle
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public add(arg0: E): boolean
        updateHead(arg0: java.util.concurrent.ConcurrentLinkedQueue$Node<E>, arg1: java.util.concurrent.ConcurrentLinkedQueue$Node<E>): void
        succ(arg0: java.util.concurrent.ConcurrentLinkedQueue$Node<E>): java.util.concurrent.ConcurrentLinkedQueue$Node<E>
        public offer(arg0: E): boolean
        public poll(): E
        public peek(): E
        first(): java.util.concurrent.ConcurrentLinkedQueue$Node<E>
        public isEmpty(): boolean
        public size(): number
        public contains(arg0: java.lang.Object | any): boolean
        public remove(arg0: java.lang.Object | any): boolean
        public addAll(arg0: java.util.Collection<E>): boolean
        public toString(): java.lang.String
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public iterator(): java.util.Iterator<E>
        public spliterator(): java.util.Spliterator<E>
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        public clear(): void
        forEachFrom(arg0: java.util.function$.Consumer<unknown>, arg1: java.util.concurrent.ConcurrentLinkedQueue$Node<E>): void
        public forEach(arg0: java.util.function$.Consumer<unknown>): void
      }

    }
  }
}
