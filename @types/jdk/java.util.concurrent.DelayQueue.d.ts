declare namespace java {
  namespace util {
    namespace concurrent {
      class DelayQueue<E extends java.util.concurrent.Delayed>
        extends java.util.AbstractQueue<E>
        implements java.util.concurrent.BlockingQueue<E>
      {
        public constructor()
        public constructor(arg0: java.util.Collection<E>)
        public add(arg0: E): boolean
        public offer(arg0: E): boolean
        public put(arg0: E): void
        public offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        public poll(): E
        public take(): E
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        public peek(): E
        public size(): number
        public drainTo(arg0: java.util.Collection<unknown>): number
        public drainTo(arg0: java.util.Collection<unknown>, arg1: number | java.lang.Integer): number
        public clear(): void
        public remainingCapacity(): number
        public toArray(): java.lang.Object[]
        public toArray<T>(arg0: T[]): T[]
        public remove(arg0: java.lang.Object | any): boolean
        removeEQ(arg0: java.lang.Object | any): void
        public iterator(): java.util.Iterator<E>
        public add(arg0: java.lang.Object | any): boolean
        public peek(): java.lang.Object
        public poll(): java.lang.Object
        public offer(arg0: java.lang.Object | any): boolean
        public poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): java.lang.Object
        public take(): java.lang.Object
        public offer(
          arg0: java.lang.Object | any,
          arg1: number | java.lang.Long,
          arg2: java.util.concurrent.TimeUnit
        ): boolean
        public put(arg0: java.lang.Object | any): void
      }
    }
  }
}
