declare namespace java {
  namespace util {
    namespace concurrent {

      class DelayQueue<E extends java.util.concurrent.Delayed> extends java.util.AbstractQueue<E> implements java.util.concurrent.BlockingQueue<E> {
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public add(arg0: E): boolean
        public offer(arg0: E): boolean
        public put(arg0: E): void
        public offer(arg0: E, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
        public poll(): E
        public take(): E
        public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): E
        public peek(): E
        public size(): int
        public drainTo(arg0: java.util.Collection<unknown>): int
        public drainTo(arg0: java.util.Collection<unknown>, arg1: int): int
        public clear(): void
        public remainingCapacity(): int
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public remove(arg0: java.lang.Object): boolean
        removeEQ(arg0: java.lang.Object): void
        public iterator(): java.util.Iterator<E>
        public add(arg0: java.lang.Object): boolean
        public peek(): java.lang.Object
        public poll(): java.lang.Object
        public offer(arg0: java.lang.Object): boolean
        public poll(arg0: long, arg1: java.util.concurrent.TimeUnit): java.lang.Object
        public take(): java.lang.Object
        public offer(arg0: java.lang.Object, arg1: long, arg2: java.util.concurrent.TimeUnit): boolean
        public put(arg0: java.lang.Object): void
      }

    }
  }
}
