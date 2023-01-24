declare namespace java {
  namespace util {
    interface Deque<E> extends java.util.Queue<E> {
      addFirst(arg0: E): void
      addLast(arg0: E): void
      offerFirst(arg0: E): boolean
      offerLast(arg0: E): boolean
      removeFirst(): E
      removeLast(): E
      pollFirst(): E
      pollLast(): E
      getFirst(): E
      getLast(): E
      peekFirst(): E
      peekLast(): E
      removeFirstOccurrence(arg0: java.lang.Object | any): boolean
      removeLastOccurrence(arg0: java.lang.Object | any): boolean
      add(arg0: E): boolean
      offer(arg0: E): boolean
      remove(): E
      poll(): E
      element(): E
      peek(): E
      addAll(arg0: java.util.Collection<E>): boolean
      push(arg0: E): void
      pop(): E
      remove(arg0: java.lang.Object | any): boolean
      contains(arg0: java.lang.Object | any): boolean
      size(): number
      iterator(): java.util.Iterator<E>
      descendingIterator(): java.util.Iterator<E>
    }
  }
}
