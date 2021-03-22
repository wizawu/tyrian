declare namespace java {
  namespace util {

    interface Iterator<E> {
      hasNext(): boolean
      next(): E
      remove(): void
      forEachRemaining(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): void
    }

  }
}
