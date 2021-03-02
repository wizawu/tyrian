declare namespace java {
  namespace util {
    namespace concurrent {

      interface Future<V> {
        cancel(arg0: boolean | java.lang.Boolean): boolean
        isCancelled(): boolean
        isDone(): boolean
        get(): V
        get(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): V
      }

    }
  }
}
