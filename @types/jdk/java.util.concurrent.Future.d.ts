declare namespace java {
  namespace util {
    namespace concurrent {

      interface Future<V> {
        cancel(arg0: boolean): boolean
        isCancelled(): boolean
        isDone(): boolean
        get(): V
        get(arg0: long, arg1: java.util.concurrent.TimeUnit): V
      }

    }
  }
}
