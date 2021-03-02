declare namespace java {
  namespace util {
    namespace concurrent {

      class ArrayBlockingQueue<E> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E>, java.io.Serializable {
        readonly items: java.lang.Object[]
        takeIndex: int
        putIndex: int
        count: int
        readonly lock: java.util.concurrent.locks.ReentrantLock
        itrs: unknown
        static inc(arg0: int, arg1: int): int
        static dec(arg0: int, arg1: int): int
        itemAt(arg0: int): E
        static itemAt<E>(arg0: java.lang.Object[], arg1: int): E
        removeAt(arg0: int): void
        public constructor(arg0: int)
        public constructor(arg0: int, arg1: boolean)
        public constructor(arg0: int, arg1: boolean, arg2: java.util.Collection<E>)
        public add(arg0: E): boolean
        public offer(arg0: E): boolean
        public put(arg0: E): void
        public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
        public poll(): E
        public take(): E
        public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
        public peek(): E
        public size(): int
        public remainingCapacity(): int
        public remove(arg0: java.lang.Object): boolean
        public contains(arg0: java.lang.Object): boolean
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public toString(): java.lang.String
        public clear(): void
        public drainTo(arg0: java.util.Collection<unknown>): int
        public drainTo(arg0: java.util.Collection<unknown>, arg1: int): int
        public iterator(): java.util.Iterator<E>
        public spliterator(): java.util.Spliterator<E>
        public forEach(arg0: java.util.function$.Consumer<unknown>): void
        public removeIf(arg0: java.util.function$.Predicate<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        checkInvariants(): void
      }

    }
  }
}
