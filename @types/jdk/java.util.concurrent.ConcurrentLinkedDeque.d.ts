declare namespace java {
  namespace util {
    namespace concurrent {

      class ConcurrentLinkedDeque<E> extends java.util.AbstractCollection<E> implements java.util.Deque<E>, java.io.Serializable {
        prevTerminator(): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        nextTerminator(): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        static newNode<E>(arg0: E): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        unlink(arg0: java.util.concurrent.ConcurrentLinkedDeque$Node<E>): void
        succ(arg0: java.util.concurrent.ConcurrentLinkedDeque$Node<E>): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        pred(arg0: java.util.concurrent.ConcurrentLinkedDeque$Node<E>): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        first(): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        last(): java.util.concurrent.ConcurrentLinkedDeque$Node<E>
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public addFirst(arg0: E): void
        public addLast(arg0: E): void
        public offerFirst(arg0: E): boolean
        public offerLast(arg0: E): boolean
        public peekFirst(): E
        public peekLast(): E
        public getFirst(): E
        public getLast(): E
        public pollFirst(): E
        public pollLast(): E
        public removeFirst(): E
        public removeLast(): E
        public offer(arg0: E): boolean
        public add(arg0: E): boolean
        public poll(): E
        public peek(): E
        public remove(): E
        public pop(): E
        public element(): E
        public push(arg0: E): void
        public removeFirstOccurrence(arg0: java.lang.Object | any): boolean
        public removeLastOccurrence(arg0: java.lang.Object | any): boolean
        public contains(arg0: java.lang.Object | any): boolean
        public isEmpty(): boolean
        public size(): number
        public remove(arg0: java.lang.Object | any): boolean
        public addAll(arg0: java.util.Collection<E>): boolean
        public clear(): void
        public toString(): java.lang.String
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public iterator(): java.util.Iterator<E>
        public descendingIterator(): java.util.Iterator<E>
        public spliterator(): java.util.Spliterator<E>
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        public forEach(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
      }

    }
  }
}
