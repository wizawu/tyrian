declare namespace java {
  namespace nio {
    namespace channels {

      interface CompletionHandler<V,A> {

        completed(arg0: V, arg1: A): void
        failed(arg0: java.lang.Throwable, arg1: A): void
      }

    }
  }
}
