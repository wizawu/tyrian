declare namespace java {
  namespace util {
    namespace concurrent {

      interface BlockingQueue<E> extends java.util.Queue<E> {
        add(arg0: E): boolean
        offer(arg0: E): boolean
        put(arg0: E): void
        offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        take(): E
        poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        remainingCapacity(): number
        remove(arg0: java.lang.Object | any): boolean
        contains(arg0: java.lang.Object | any): boolean
        drainTo(arg0: java.util.Collection<unknown>): number
        drainTo(arg0: java.util.Collection<unknown>, arg1: number | java.lang.Integer): number
      }

    }
  }
}
