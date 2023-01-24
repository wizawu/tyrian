declare namespace javax {
  namespace naming {
    interface NamingEnumeration<T> extends java.util.Enumeration<T> {
      next(): T
      hasMore(): boolean
      close(): void
    }
  }
}
