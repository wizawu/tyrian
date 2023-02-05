declare namespace java {
  namespace util {
    namespace concurrent {
      interface BlockingDeque<E> extends java.util.concurrent.BlockingQueue<E>, java.util.Deque<E> {
        addFirst(arg0: E): void
        addLast(arg0: E): void
        offerFirst(arg0: E): boolean
        offerLast(arg0: E): boolean
        putFirst(arg0: E): void
        putLast(arg0: E): void
        offerFirst(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        offerLast(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        takeFirst(): E
        takeLast(): E
        pollFirst(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        pollLast(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        removeFirstOccurrence(arg0: java.lang.Object | any): boolean
        removeLastOccurrence(arg0: java.lang.Object | any): boolean
        add(arg0: E): boolean
        offer(arg0: E): boolean
        put(arg0: E): void
        offer(arg0: E, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): boolean
        remove(): E
        poll(): E
        take(): E
        poll(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): E
        element(): E
        peek(): E
        remove(arg0: java.lang.Object | any): boolean
        contains(arg0: java.lang.Object | any): boolean
        size(): number
        iterator(): java.util.Iterator<E>
        push(arg0: E): void
      }
    }
  }
}
