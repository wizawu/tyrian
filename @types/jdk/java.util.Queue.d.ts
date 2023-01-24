declare namespace java {
  namespace util {
    interface Queue<E> extends java.util.Collection<E> {
      add(arg0: E): boolean
      offer(arg0: E): boolean
      remove(): E
      poll(): E
      element(): E
      peek(): E
    }
  }
}
