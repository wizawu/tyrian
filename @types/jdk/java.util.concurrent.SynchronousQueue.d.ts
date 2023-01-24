declare namespace java {
  namespace util {
    namespace concurrent {
      class SynchronousQueue<E>
        extends java.util.AbstractQueue<E>
        implements java.util.concurrent.BlockingQueue<E>, java.io.Serializable
      {
        static readonly MAX_TIMED_SPINS: int
        static readonly MAX_UNTIMED_SPINS: int
        static readonly SPIN_FOR_TIMEOUT_THRESHOLD: long
        public constructor()
        public constructor(arg0: boolean | java.lang.Boolean)
        public put(arg0: E): void
        public offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public offer(arg0: E): boolean
        public take(): E
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public poll(): E
        public isEmpty(): boolean
        public size(): number
        public remainingCapacity(): number
        public clear(): void
        public contains(arg0: java.lang.Object | any): boolean
        public remove(arg0: java.lang.Object | any): boolean
        public containsAll(arg0: java.util.Collection<unknown>): boolean
        public removeAll(arg0: java.util.Collection<unknown>): boolean
        public retainAll(arg0: java.util.Collection<unknown>): boolean
        public peek(): E
        public iterator(): java.util.Iterator<E>
        public spliterator(): java.util.Spliterator<E>
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public toString(): java.lang.String
        public drainTo(arg0: java.util.Collection<unknown>): number
        public drainTo(arg0: java.util.Collection<unknown>, arg1: number | java.lang.Integer): number
      }
    }
  }
}
