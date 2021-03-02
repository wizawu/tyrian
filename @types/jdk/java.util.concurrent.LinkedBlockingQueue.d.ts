declare namespace java {
  namespace util {
    namespace concurrent {

      class LinkedBlockingQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E>, java.io.Serializable {
        head: java.util.concurrent.LinkedBlockingQueue$Node<E>
        fullyLock(): void
        fullyUnlock(): void
        public constructor()
        public constructor(arg0: int)
        public constructor(arg0: java.util.Collection<E>)
        public size(): int
        public remainingCapacity(): int
        public put(arg0: E): void
        public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
        public offer(arg0: E): boolean
        public take(): E
        public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
        public poll(): E
        public peek(): E
        unlink(arg0: java.util.concurrent.LinkedBlockingQueue$Node<E>, arg1: java.util.concurrent.LinkedBlockingQueue$Node<E>): void
        public remove(arg0: java.lang.Object): boolean
        public contains(arg0: java.lang.Object): boolean
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public toString(): java.lang.String
        public clear(): void
        public drainTo(arg0: java.util.Collection<unknown>): int
        public drainTo(arg0: java.util.Collection<unknown>, arg1: int): int
        succ(arg0: java.util.concurrent.LinkedBlockingQueue$Node<E>): java.util.concurrent.LinkedBlockingQueue$Node<E>
        public iterator(): java.util.Iterator<E>
        public spliterator(): java.util.Spliterator<E>
        public forEach(arg0: java.util.function$.Consumer<unknown>): void
        forEachFrom(arg0: java.util.function$.Consumer<unknown>, arg1: java.util.concurrent.LinkedBlockingQueue$Node<E>): void
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        findPred(arg0: java.util.concurrent.LinkedBlockingQueue$Node<E>, arg1: java.util.concurrent.LinkedBlockingQueue$Node<E>): java.util.concurrent.LinkedBlockingQueue$Node<E>
      }

    }
  }
}
