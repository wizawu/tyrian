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
        static inc(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        static dec(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        itemAt(arg0: number | java.lang.Integer): E
        static itemAt<E>(arg0: java.lang.Object[] | any[], arg1: number | java.lang.Integer): E
        removeAt(arg0: number | java.lang.Integer): void
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
        public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean, arg2: java.util.Collection<E>)
        public add(arg0: E): boolean
        public offer(arg0: E): boolean
        public put(arg0: E): void
        public offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public poll(): E
        public take(): E
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public peek(): E
        public size(): number
        public remainingCapacity(): number
        public remove(arg0: java.lang.Object | any): boolean
        public contains(arg0: java.lang.Object | any): boolean
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public toString(): java.lang.String
        public clear(): void
        public drainTo(arg0: java.util.Collection<unknown>): number
        public drainTo(arg0: java.util.Collection<unknown>, arg1: number | java.lang.Integer): number
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
