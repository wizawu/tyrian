declare namespace java {
  namespace util {
    namespace concurrent {
      class LinkedBlockingDeque<E>
        extends java.util.AbstractQueue<E>
        implements java.util.concurrent.BlockingDeque<E>, java.io.Serializable
      {
        first: java.util.concurrent.LinkedBlockingDeque$Node<E>
        last: java.util.concurrent.LinkedBlockingDeque$Node<E>
        readonly lock: java.util.concurrent.locks.ReentrantLock
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: java.util.Collection<E>)
        unlink(arg0: java.util.concurrent.LinkedBlockingDeque$Node<E>): void
        public addFirst(arg0: E): void
        public addLast(arg0: E): void
        public offerFirst(arg0: E): boolean
        public offerLast(arg0: E): boolean
        public putFirst(arg0: E): void
        public putLast(arg0: E): void
        public offerFirst(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public offerLast(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public removeFirst(): E
        public removeLast(): E
        public pollFirst(): E
        public pollLast(): E
        public takeFirst(): E
        public takeLast(): E
        public pollFirst(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public pollLast(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public getFirst(): E
        public getLast(): E
        public peekFirst(): E
        public peekLast(): E
        public removeFirstOccurrence(arg0: java.lang.Object | any): boolean
        public removeLastOccurrence(arg0: java.lang.Object | any): boolean
        public add(arg0: E): boolean
        public offer(arg0: E): boolean
        public put(arg0: E): void
        public offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public remove(): E
        public poll(): E
        public take(): E
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public element(): E
        public peek(): E
        public remainingCapacity(): number
        public drainTo(arg0: java.util.Collection<unknown>): number
        public drainTo(arg0: java.util.Collection<unknown>, arg1: number | java.lang.Integer): number
        public push(arg0: E): void
        public pop(): E
        public remove(arg0: java.lang.Object | any): boolean
        public size(): number
        public contains(arg0: java.lang.Object | any): boolean
        public addAll(arg0: java.util.Collection<E>): boolean
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public toString(): java.lang.String
        public clear(): void
        succ(arg0: java.util.concurrent.LinkedBlockingDeque$Node<E>): java.util.concurrent.LinkedBlockingDeque$Node<E>
        public iterator(): java.util.Iterator<E>
        public descendingIterator(): java.util.Iterator<E>
        public spliterator(): java.util.Spliterator<E>
        public forEach(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
        ): void
        forEachFrom(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>,
          arg1: java.util.concurrent.LinkedBlockingDeque$Node<E>
        ): void
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        checkInvariants(): void
      }
    }
  }
}
